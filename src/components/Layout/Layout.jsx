import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppHeaderBar } from 'components/AppBar/AppBar';

import Box from '@mui/material/Box';


export const Layout = () => {
  return (
    <Box>
      <AppHeaderBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          reverseOrder={false}
        />
      </main>
    </Box>
  );
};