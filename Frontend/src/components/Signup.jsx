import React from 'react';
import { useForm } from "react-hook-form";
import {useNavigate,useLocation} from "react-router-dom";
import Login from "./Login";
import axios from "axios"
import toast from 'react-hot-toast'
export default function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:5000/user/signup",userInfo)
   .then((res)=>{
    
    if(res.data){
      toast.success("signup successful");
      navigate(from ,{replace:true});
    }
    localStorage.setItem("users",JSON.stringify(res.data.user));
   }).catch((err)=>{
    if (err.response) {
      // Backend returned an error response (status code outside of 2xx)
      console.error("Error response:", err.response.data);
      toast.error("Error: " + err.response.data.message || "Unknown server error");
    } else if (err.request) {
      // Request was made but no response received
      console.error("Error request:", err.request);
    } else {
      // Something else went wrong during request setup
      console.error("Error message:", err.message);
    }
   })
    // You can post data to backend here
  };

  const handleClose = () => {
    window.location.href = '/'; // Redirect to homepage
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

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("fullname", { required: true })}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          {/* Submit & Login Link */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Signup
            </button>

            <div className="text-sm">
              Have an account?{' '}
              <button
                type="button"
                className="text-blue-500 underline"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Login Modal lives outside form layout so it's globally accessible */}
      <Login />
    </div>
  );
}
