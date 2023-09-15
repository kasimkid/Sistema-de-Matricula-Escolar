import './App.css';
import injectContext from "./store/appContext";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="*" element={<h1>Not found!</h1>} /> */}
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
