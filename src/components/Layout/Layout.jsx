import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BarApp } from 'components/AppBar/AppBar';

import { ContainerLayout } from 'components/Layout/Layout.styled';

export const Layout = () => {
  return (
    <ContainerLayout>
      <BarApp />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          reverseOrder={false}
        />
      </main>
    </ContainerLayout>
  );
};