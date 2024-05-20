import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getName = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:3000/dashboard/", {
        headers: { token: localStorage.token },
      });

      //   console.log(response.data);
      setName(response.data.user_name);
    } catch (err) {
      console.log(err.message);
    }
  };


  const logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
    toast.success("Logged out successfully")
  }

  useEffect(() => {
    getName();
  },[]);
  

  return (
    <div className="w-full flex flex-col items-center py-36 gap-y-8">
      <h1 className="text-3xl font-semibold">Welcome {name}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 px-4 py-2 rounded-md"
        onClick={e => logOut(e)}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
