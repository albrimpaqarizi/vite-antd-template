import { ReactElement } from 'react';
import { TextDemo } from '~/components/atoms';
import logo from '~/assets/logo.svg';

import { useGetUsersQuery } from '~/react-query/hooks/useGetUsersQuery';

const DashboardPage = (): ReactElement => {
  const { data: users, isFetched } = useGetUsersQuery();

  console.log('DashboardPage', isFetched, users);

  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center min-h-screen text-base text-white">
        <img src={logo} className="pointer-events-none h-44 w-44 animate-spin-slow" alt="logo" />
        <p>Hello Vite + React!</p>

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

export default DashboardPage;
