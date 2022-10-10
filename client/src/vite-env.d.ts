/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URI: string,
    readonly VITE_BACKEND_SSR_URI: string,
    readonly VITE_PORT: string
    readonly VITE_LG_LICENSE: string
    readonly VITE_VK_LINK: string
    readonly VITE_TELEGRAM_LINK: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }