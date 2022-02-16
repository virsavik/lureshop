import React, { Suspense, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import 'react-toastify/dist/ReactToastify.css';
import Siderbar, { SidebarItem } from '../components/Sidebar/Sidebar';
import Footer from './footer';
import Header, { HeaderMenuItemType } from './header';
import { toast, ToastContainer } from 'react-toastify';
import { Badge, IconButton, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const itemList: HeaderMenuItemType[] = [
  { label: 'Home', icon: 'home', path: '/' },
  { label: 'Product', icon: ['fab', 'product-hunt'], path: '/product' },
  { label: 'Sort', icon: 'sort' },
  { label: 'Brand', icon: 'store' },
  { label: 'Color', icon: 'droplet' },
  { label: 'Liked', icon: 'heart', path: '/liked', badge: 2 },
];

interface AppProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}
2;
const lightTheme = createTheme({ palette: { mode: 'light' } });

const MainLayout = (props: AppProps) => {
  const { window, children } = props;
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={lightTheme}>
      <ToastContainer
        position={toast.POSITION.TOP_LEFT}
        className="toastify-container"
        toastClassName="toastify-toast"
      />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header title="Lureshop" position="fixed">
          {itemList.map(item => (
            <MenuItem key={item.label} onClick={() => navigate(item.path)}>
              {item.badge ? (
                <>
                  <Badge badgeContent={item.badge} color="error">
                    <FontAwesomeIcon icon={item.icon} />
                  </Badge>
                  &nbsp; {item.label}
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={item.icon} />
                  &nbsp; {item.label}
                </>
              )}
            </MenuItem>
          ))}
        </Header>
        {/* Main content */}
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            p: 3,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {children}
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container> */}
        </Box>
      </Box>
      {/* Footer content */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 4 }}>
        <Footer title="LureShop" description="Ứng dụng web bán đồ ăn cá" />
      </Box>
    </ThemeProvider>
  );
};
export default MainLayout;
