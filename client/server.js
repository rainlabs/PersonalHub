import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as dotenv from 'dotenv'
import Cookie from 'cookie-universal';

dotenv.config()
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
  hmrPort
) {
  const resolve = (p) => path.resolve(__dirname, p)

  const indexProd = isProd
    ? fs.readFileSync(resolve('build/client/index.html'), 'utf-8')
    : ''

  const app = express()

  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        },
        hmr: {
          port: hmrPort
        }
      },
      appType: 'custom'
    })
    // use vite's connect instance as middleware
    app.use(vite.middlewares)
  } else {
    app.use((await import('compression')).default())
    app.use(
      (await import('serve-static')).default(resolve('build/client'), {
        index: false
      })
    )
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl
      const cookies = Cookie(req, res)

      let template, entry
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        entry = await vite.ssrLoadModule('/src/entry-server.tsx')
      } else {
        template = indexProd
        entry = await import('./build/server/entry-server.cjs')
      }

      const context = {}

      await entry.prefetchApiData(url, cookies)
      const appHtml = await entry.renderToPipe(url, context)
      const { helmet } = context

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url)
      }

      const preloadedState = entry.getPreloadedState()

      let html = template.replace(`<!--ssr-title-->`, helmet.title?.toString() || '')
      html = html.replace(`<!--ssr-meta-->`, helmet.meta?.toString() || '')
      html = html.replace(`/*<!--ssr-preloaded-state-->*/`, `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};`)
      html = html.replace(`<!--ssr-body-->`, appHtml)

      entry.resetStore()

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      !isProd && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(process.env.VITE_PORT, () => {
      console.log(`http://localhost:${process.env.VITE_PORT}`)
    })
  )
}