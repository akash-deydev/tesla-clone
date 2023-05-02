import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Login from "./components/Login"
import Signup from "./components/Signup"
import TeslaAccount from './components/TeslaAccount';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName
          }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/teslaaccount" element={<TeslaAccount />} />
      </Routes>
    </div>

  );
}

export default App;
