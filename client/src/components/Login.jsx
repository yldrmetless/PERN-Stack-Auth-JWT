import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        body
      );

      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        toast.success("Login successfully")
      }
      else{
        setAuth(false)
        toast.error("Password or email is incorrect")
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.response.data);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-36">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form
        className="flex flex-col max-w-[700px] w-full gap-y-6 mt-8"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="focus:outline-none border focus:border-gray-400 py-2 px-4 rounded-md"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="focus:outline-none border focus:border-gray-400 py-2 px-4 rounded-md"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 py-2 w-full rounded-md text-white"
        >
          Login
        </button>
        <Link to={"/register"} className="underline text-blue-500">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
