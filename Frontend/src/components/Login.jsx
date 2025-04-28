import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/login") {
      document.getElementById("my_modal_3")?.showModal();
    }
  }, [location]);

  const onSubmit = async (data) => {
    const userInfo={
      
      email:data.email,
      password:data.password,
    }
   await axios.post("http://localhost:5000/user/login",userInfo)
   .then((res)=>{
    console.log(res.data);
    if(res.data){
      toast.success("login successful")
      handleClose();
      setTimeout(()=>{
       
        window.location.reload();
        localStorage.setItem("users",JSON.stringify(res.data.user));
      },1000);
     
    }
    
   }).catch((err)=>{
    if (err.response) {
      // Backend returned an error response (status code outside of 2xx)
      console.error("Error response:", err.response.data);
      toast.error("Error: " + err.response.data.message || "Unknown server error");
      setTimeout(()=>{},3000);
    } else if (err.request) {
      // Request was made but no response received
      console.error("Error request:", err.request);
      setTimeout(()=>{},3000);
    } else {
      // Something else went wrong during request setup
      console.error("Error message:", err.message);
      setTimeout(()=>{},3000);
    }
   })
  };

  const handleClose = () => {
    document.getElementById('my_modal_3')?.close();
    navigate('/'); // Navigate to home when modal is closed
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input
                type='email'
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input
                type='password'
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>Not registered?{' '}
                <Link to="/signup" className='underline text-blue-500'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
