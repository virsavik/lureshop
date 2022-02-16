import React from 'react';
import { RouteObject } from 'react-router-dom';

// const MainLayout = React.lazy(() => import('src/shared/layouts/main-layout'));
const LoginPage = React.lazy(() => import('src/pages/LoginPage/LoginPage'));

const ROUTES: RouteObject[] = [
  { path: '/login', element: <LoginPage /> },
  // Add some route here
];

export default ROUTES;
