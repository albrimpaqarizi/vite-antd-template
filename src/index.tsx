import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { QueryClientProvider } from 'react-query';

import App from './App';
import { queryClient } from './react-query/config/client';

// styles
import 'antd/dist/antd.css';
import './styles/theme/antd-customized.less';
import './styles/main.scss';

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />} */}
      </QueryClientProvider>
    </Suspense>
  </StrictMode>,
  document.querySelector('#root'),
);
