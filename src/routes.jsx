import React from 'react';
import { useRoutes } from 'react-router-dom';

const MainLayout = React.lazy(() => import('./shared/layouts/main-layout'));
const LoginPage = React.lazy(() => import('src/pages/LoginPage/LoginPage'));
const RegisterPage = React.lazy(() => import('src/pages/RegisterPage/RegisterPage'));
const ProfileManager = React.lazy(() => import('./pages/ProfileManagerPage/ProfileManager'));
const Product = React.lazy(() => import('./pages/ProductPage/ProductPage'));
const FavoritePage = React.lazy(() => import('./pages/FavoritePage/Favorite'));
const UserManager = React.lazy(() => import('./pages/UserManagerPage/user-manager'));
const Home = React.lazy(() => import('./pages/HomePage/Home'));

export const ROUTES = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/product', element: <Product /> },
      { path: '/profile', element: <ProfileManager /> },
      { path: '/liked', element: <FavoritePage /> },
      { path: '/user-manager', element: <UserManager /> },
      // Add some route here
      { path: '*', element: <Home /> },
    ],
  },
];

const BrowerRouterProvider = () => {
  const routeElements = useRoutes(ROUTES);
  return routeElements;
};

export default BrowerRouterProvider;
