import { ReactElement } from 'react';

const ErrorPage = (): ReactElement => {
  console.log('ErrorPage');
  return (
    <div className="flex items-center justify-center h-screen text-center text-white">
      <h3>ErrorPage</h3>
    </div>
  );
};

export default ErrorPage;
