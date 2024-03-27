import React from 'react';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AdminHomePage } from './pages/AdminHomePage';

function App({routes}) {
  const [cookies, setCookies] = useCookies(['loggedIn']);
  console.log(cookies.loggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin/login" element={<LoginPage setCookies={setCookies}/>}/>
        <Route path="/admin/home" element={cookies.loggedIn==true ? <AdminHomePage/> : <Navigate to="/admin/login"/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
