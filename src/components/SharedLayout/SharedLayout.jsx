
import {  Outlet } from "react-router-dom";
import {  Suspense } from "react";
import Styles from 'components/SharedLayout/SharedLayout.module.css'


import { AppBar } from "components/AppBar/AppBar";



 const SharedLayout = () => {

 
  return (
    <div className={Styles.Container}>
      <header className={Styles.Header}>
        <nav className={Styles.nav}>
        <AppBar />
        </nav>
      </header>
   
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout