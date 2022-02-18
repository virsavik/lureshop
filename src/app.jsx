import React, { Suspense } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import ROUTES from './routes';
import SpinnerBar from './shared/components/Spinner';
import MainLayout from './shared/layouts/main-layout';

const BrowerRouterProvider = () => {
  const routeElements = useRoutes(ROUTES);
  return routeElements;
};

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<SpinnerBar />}>
          <BrowerRouterProvider />
        </Suspense>
      </MainLayout>
    </Router>
  );
};
export default App;
