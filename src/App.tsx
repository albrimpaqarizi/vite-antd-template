import { useState } from 'react';
import { Button } from 'antd';
import logo from './assets/logo.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen text-base text-white">
        <img src={logo} className="pointer-events-none h-44 w-44 animate-spin-slow" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button type="dashed" htmlType="button" size="middle" onClick={() => setCount(count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>test</p>
        <p>
          <a
            className="text-sky-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {'    |    '}
          <a
            className="text-green-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
