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


export default function AppRouter() {
  const [user, setUser] = useState({})

  
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const resetUser = () => {
    setUser({});
  };
  
  return (
  <BrowserRouter>
  <div className = "container">
      <Header />
      <Routes>
      <Route
        path="/"
        element={<FirstStep updateUser={user} />}
        exact={true}
      />
      <Route
        path="/second"
        element={<SecondStep updateUser={user} />}
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