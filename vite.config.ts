import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';
import rollupReplace from '@rollup/plugin-replace';
import EnvironmentPlugin from 'vite-plugin-environment';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    manifest: true,
  },
  publicDir: 'public',
  plugins: [
    react(),
    tsconfigPaths(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: name => `antd/es/${name}/style`,
        },
      ],
    }),
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    EnvironmentPlugin(['NODE_ENV', 'REACT_APP_NAME', 'API_URL']),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      '~atoms': resolve(__dirname, 'src/components/atoms'),
      '~molecules': resolve(__dirname, 'src/components/molecules'),
      '~organisms': resolve(__dirname, 'src/components/organisms'),
      '~templates': resolve(__dirname, 'src/components/templates'),
      '~pages': resolve(__dirname, 'src/pages'),
      '~utils': resolve(__dirname, 'src/utils'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${resolve(
            __dirname,
            './',
            'src/styles/theme/antd-customized.less',
          )}"`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
