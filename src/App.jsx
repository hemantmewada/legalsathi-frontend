import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import Header from './components/Header';
import Test from './components/Test';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
              <Route path="" element={<Home />} />
              <Route path="test" element={<Test />} />
          </Route>
        </Routes>
  </BrowserRouter>
  )
}

export default App