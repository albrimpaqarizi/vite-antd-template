import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// styles
import './styles/main.scss';

// pages
import { DashboardPage, ErrorPage } from '~pages';

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
