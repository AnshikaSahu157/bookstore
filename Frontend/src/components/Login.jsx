import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      document.getElementById("my_modal_3")?.showModal();
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted');
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3')?.close()}
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
              />
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input
                type='password'
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
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
