import { ReactElement } from 'react';
import { TextDemo } from '~/components/atoms';
import logo from '~/assets/logo.svg';

import { useGetUsersQuery } from '~/react-query/hooks/useGetUsersQuery';

const DashboardPage = (): ReactElement => {
  const { data: users, isFetched } = useGetUsersQuery();

  console.log('DashboardPage', isFetched, users);

  return (
    <div className="text-center">
      <header className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-text-base tw-text-white">
        <img
          src={logo}
          className="tw-pointer-events-none tw-h-44 tw-w-44 tw-animate-spin-slow"
          alt="logo"
        />
        <p>Hello Vite + React!</p>

        <TextDemo>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </TextDemo>
        <p>
          <a
            className="tw-text-sky-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {'    |    '}
          <a
            className="tw-text-green-400"
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
