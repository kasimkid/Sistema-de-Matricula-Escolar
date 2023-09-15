import React from 'react';
import injectContext from "./store/appContext";
import ScrollToTop from './components/scrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNavbar } from './components/navbar';
import { Home } from "./views/home";
import './App.css';
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <>
      <BrowserRouter>
        <MenuNavbar/>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>

  );
}

export default injectContext(App);
