import React from 'react';
import { RouteObject } from 'react-router-dom';

const LoginPage = React.lazy(() => import('src/pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('src/pages/RegisterPage/RegisterPage'));

const ROUTES: RouteObject[] = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  // Add some route here
];

export default ROUTES;
