import "./App.css";
import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAuthenticated, setIsAuthenicated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenicated(boolean)
  }


  const isAuth = async() => {
    try{
      const response = await axios.get("http://localhost:3000/auth/is-verify", {
      headers: { token: localStorage.token }
    });

    // console.log(response.data);
    
    response.data === true ? setIsAuthenicated(true) : setIsAuthenicated(false)
    }
    catch(err){
      console.log(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  }, [])

  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/login" element={
          !isAuthenticated ? (
            <Login setAuth={setAuth} />
          ) : (
            <Navigate to={"/dashboard"}/>
          )
        } />
        <Route path="/register" element={
          !isAuthenticated ? (
            <Register setAuth={setAuth} />
          ) : (
            <Navigate to={"/login"}/>
          )
        } />
        <Route path="/dashboard" element={
          isAuthenticated ? (
            <Dashboard setAuth={setAuth}/>
          ) : (
            <Navigate to={"/login"}/>
          )
        } />
      </Routes>
    </div>
  );
}

export default App;
