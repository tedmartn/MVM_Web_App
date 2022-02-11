import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Router,
} from "react-router-dom";
import React, {useState} from 'react';
import FirstStep from '../components/firstStep';
import Header from '../components/header';
import SecondStep from "../components/secondStep";
import ThirdStep from "../components/thirdStep"


const AppRouter = () => (
  <BrowserRouter>
  <div className = "container">
      <Header />
      <Routes>
          <Route path="/" element={<FirstStep />}></Route>
          <Route path="/second" element={<SecondStep />}></Route>
          <Route path="/third" element={<ThirdStep />}></Route>
      </Routes>
  </div>
  </BrowserRouter>
);

export default AppRouter