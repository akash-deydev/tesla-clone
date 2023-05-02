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
// import Car from './components/Car';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
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
        {/* <Route path='/model' element={<Car />} /> */}
      </Routes>
    </div>

  );
}

export default App;
