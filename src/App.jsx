import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Header from './components/Header';
import Service from './components/Service';
import { ToastContainer } from 'react-toast'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
              <Route path="" element={<Home />} />
              <Route path="/:service" element={<Service />} />
          </Route>
        </Routes>
        <ToastContainer />
  </BrowserRouter>
  )
}

export default App