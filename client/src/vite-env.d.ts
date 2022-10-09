/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URI: string,
    readonly VITE_BACKEND_SSR_URI: string,
    readonly VITE_PORT: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }