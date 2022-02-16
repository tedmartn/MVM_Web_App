import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, {useState} from 'react';
import FirstStep from '../components/firstStep';
import Header from '../components/header';
import SecondStep from "../components/secondStep";
import ThirdStep from "../components/thirdStep"


export default function AppRouter() {
  
  return (
  <BrowserRouter>
  <div className = "container">
      <Header />
      <Routes>
      <Route
        path="/"
        element={<FirstStep />}
        exact={true}
      />
      <Route
        path="/second"
        element={<SecondStep />}
      />
      <Route
        path="/third"
        element={<ThirdStep />}
      />
      </Routes>
  </div>
  </BrowserRouter>
  )
}