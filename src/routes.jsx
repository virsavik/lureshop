import React from 'react';
// import LoginPage from 'src/pages/LoginPage/LoginPage';
// import RegisterPage from 'src/pages/RegisterPage/RegisterPage';
// import ProfileManager from './pages/ProfileManagerPage/ProfileManager';
// import Product from './pages/ProductPage/ProductPage';

const LoginPage = React.lazy(() => import('src/pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('src/pages/RegisterPage/RegisterPage'));
const ProfileManager = React.lazy(() => import('./pages/ProfileManagerPage/ProfileManager'));
const Product = React.lazy(() => import('./pages/ProductPage/ProductPage'));
const FavoritePage = React.lazy(() => import('./pages/FavoritePage/Favorite'));

const ROUTES = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/product', element: <Product /> },
  { path: '/profile', element: <ProfileManager /> },
  { path: '/liked', element: <FavoritePage /> },
  // Add some route here
];

export default ROUTES;
