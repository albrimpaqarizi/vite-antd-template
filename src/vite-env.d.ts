/// <reference types="vite/client" />

interface ImportMetaEnvironment {
  readonly NODE_ENV: string;
  readonly REACT_APP_NAME: string;
  readonly API_URL: string;
  // more env variables...
}
