import loadable from '@loadable/component';
import { timeout } from 'promise-timeout';
import { PAGE_LOAD_TIMEOUT } from 'config/global';

// import your loader component
const PageLoader = () => <div>Loading...</div>;

//* Export all pages

// root settings pages
export const DashboardPage = loadable(
  () => timeout(import('./DashboardPage/DashboardPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  },
);

// error pages
export const ErrorPage = loadable(
  () => timeout(import('./ErrorPage/ErrorPage'), PAGE_LOAD_TIMEOUT),
  {
    fallback: <PageLoader />,
  },
);
