import React from 'react';
import LoginPage from 'src/pages/LoginPage/LoginPage';
import RegisterPage from 'src/pages/RegisterPage/RegisterPage';

const ROUTES = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  // Add some route here
];

export default ROUTES;
