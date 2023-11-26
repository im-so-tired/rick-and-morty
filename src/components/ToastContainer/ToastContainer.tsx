import React from 'react';
import { ToastContainer as ToastContainerUI } from 'react-toastify';

export const ToastContainer = () => {
  return (
    <ToastContainerUI
      position="bottom-left"
      autoClose={2000}
      limit={1}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
