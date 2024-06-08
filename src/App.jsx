import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Skeleton from './components/Skeleton';
import Service from './components/Service';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Skeleton />}>
              <Route path="" element={<Home />} />
              <Route path="/:service" element={<Service />} />
          </Route>
        </Routes>
        <Toaster />
  </BrowserRouter>
  )
}

export default App