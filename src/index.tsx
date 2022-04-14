import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './styles/main.scss';
import './styles/vendor/antd-customized.less';

// internal
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
