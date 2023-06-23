
import React, { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/Operations';
import { useAuth } from './Hooks/useAuth';


const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));

export default function App () {
     const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
     <Routes>
     <Route path="/" element={<SharedLayout />}>
       <Route path="/register" element= {<PublicRoute redirectTo='/contacts' component= {<RegisterPage />}/>} />
       <Route path="/login" element= {<PublicRoute redirectTo='/contacts' component= {<LoginPage />}/>} />
       <Route path="/contacts" element= {<PrivateRoute redirectTo='/login' component= {<ContactsPage />}/>} >
       </Route>
       </Route>
     </Routes>
    
    
   )}






