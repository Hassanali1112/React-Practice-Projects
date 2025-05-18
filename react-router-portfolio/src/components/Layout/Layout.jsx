import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}

export default Layout