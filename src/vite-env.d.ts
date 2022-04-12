/// <reference types="vite/client" />

interface ImportMetaEnvironment {
  readonly NODE_ENV: string;
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnvironment;
}
