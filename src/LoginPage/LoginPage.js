import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [show, setshow] = useState(false)
  const handleInput = (e) => {
    const inputTarget = e.target
    setshow(false)
    if (inputTarget.name === "user") setUser(inputTarget.value)
    else setPassword(inputTarget.value)
  }
  const handleSubmit = () => {
    if (user === "admin" && password === "8SKuecEAetRvtrjJ") {
      localStorage.setItem('auth', true);
      navigate('/');
    }
    else setshow(true)
  }
  const useEventListener = (listener, options, key) => {
    React.useEffect(
      () => {
        const handle = (e) => {
          if (e.code === key)
            options()
        }
        document.addEventListener(listener, handle)
        return () => {
          document.removeEventListener(listener, handle);
        };
      },
      [document, listener, options]
    );
  };
  useEventListener("keydown", handleSubmit, "Enter")
  return (
    <div className="w-full max-w-xs" style={{
      position: "relative",
      top: "50vh",
      left: "50vw",
      transform: "translate(-50%,-50%)"
    }}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input value={user} onChange={(e) => handleInput(e)} name="user" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input value={password} onChange={(e) => handleInput(e)} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Password" type="password" />
          {show && <p className="text-red-500 text-xs italic">The user name or password is incorrect. Try again</p>}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;Copyright © 2022, all right reserved. Developed by Laboon.org
      </p>
    </div>
  )
};

export default LoginPage;