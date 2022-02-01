import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import React from 'react';
import FirstStep from '../components/firstStep';
import Header from '../components/header';
import SecondStep from "../components/secondStep";

const AppRouter = () => (
  <BrowserRouter>
  <div className = "container">
      <Header />
      <Routes>
          <Route path="/" element={<FirstStep/>}></Route>
          <Route path="/second" element={<SecondStep/>}></Route>
      </Routes>
  </div>
  </BrowserRouter>
);

export default AppRouter