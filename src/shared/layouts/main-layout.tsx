import React, { Suspense, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './footer';
import { toast, ToastContainer } from 'react-toastify';
import WNavBar, { NavItemType } from './navbar';

const itemList: NavItemType[] = [
  { label: 'Home', icon: 'home', path: '/' },
  { label: 'Product', icon: ['fab', 'product-hunt'], path: '/product' },
  {
    label: 'Sort',
    subItems: [{ label: 'Top' }, { label: 'New' }, { label: 'Price' }],
  },
  {
    label: 'Brand',
    subItems: [
      { label: 'Rapala', path: '/brand/rapala' },
      { label: 'Heddon', path: '/brand/heddon' },
      { label: 'Cotton Cordell', path: '/brand/cotton-cordell' },
      { label: 'Rebel', path: '/brand/rebel' },
      { label: 'Mepps', path: '/brand/mepps' },
      { label: 'none', path: '/brand/none' },
    ],
  },
  {
    label: 'Color',
    subItems: [
      { label: 'Red', path: '/color/red' },
      { label: 'Blue', path: '/color/blue' },
      { label: 'Green', path: '/color/green' },
      { label: 'Yellow', path: '/color/yellow' },
      { label: 'Brow', path: '/color/brow' },
      { label: 'Black', path: '/color/black' },
      { label: 'White', path: '/color/white' },
      { label: 'Any', path: '/color/any' },
    ],
  },
  { label: 'Liked', icon: 'heart', path: '/liked' },
];

interface AppProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const MainLayout = (props: AppProps) => {
  return (
    <div>
      <ToastContainer
        position={toast.POSITION.TOP_LEFT}
        className="toastify-container"
        toastClassName="toastify-toast"
      />
      <WNavBar
        title="lureshop"
        expand="md"
        styles={{
          backgroundColor: '#1976d2',
        }}
        items={itemList}
      />
      <div
        className="container-fluid mt-5"
        style={{
          height: '100vh',
        }}
      >
        {props.children}
      </div>
      <Footer title="lureshop" description="This is a website" />
    </div>
  );
};
export default MainLayout;
