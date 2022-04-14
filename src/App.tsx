import { useState } from 'react';
import { Button } from 'antd';

import logo from './assets/logo.svg';

// query
import { useGetUsersQuery } from './react-query/hooks/useGetUsersQuery';
import { TextDemo } from '~atoms';

const App = () => {
  const [count, setCount] = useState(0);
  const { data: users, isFetched } = useGetUsersQuery();

  console.log('users', users);

  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen text-base text-white">
        <img src={logo} className="pointer-events-none h-44 w-44 animate-spin-slow" alt="logo" />
        <p>Hello Vite + React!</p>
        {isFetched &&
          users.map((user: { id: string; name: string }) => <p key={user.id}>{user.name}</p>)}
        <p>
          <Button type="dashed" htmlType="button" size="middle" onClick={() => setCount(count + 1)}>
            count is: {count}
          </Button>
        </p>
        <TextDemo>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </TextDemo>
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
