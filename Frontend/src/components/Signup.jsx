import React from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login";

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signup submitted!');
    // You can handle form data here later
  };

  const handleClose = () => {
    window.location.href = '/'; // Redirect to homepage when "close" button is clicked
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none"
              required
            />
          </div>

          {/* Submit & Login Link */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Signup
            </button>
            <p className="text-sm">
              Have an account?{' '}
              <div className="">
    <button className="bg-black text-white px-3 py-2  rounded-md hover:bg-slate-800 duration-300 cursor-pointer "
    onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
    <Login/>
  </div>
            
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
