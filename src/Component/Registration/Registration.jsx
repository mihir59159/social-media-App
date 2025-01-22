import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({ name: '', email: '', username: '', password: '' });
  };

  const onError = (error) => {
    console.log('error ' + error);
  };

  return (
    <div className="h-screen w-screen bg-[rgb(193,190,255)] flex justify-center items-center">
      <div className="container flex flex-col lg:flex-row justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] max-w-[900px] bg-white rounded-md overflow-hidden">
        {/* Left Section */}
        <div
          className="right flex-1 w-full text-white p-8 lg:p-16 flex flex-col items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url('https://images.pexels.com/photos/30159228/pexels-photo-30159228/free-photo-of-charming-narrow-street-in-aix-en-provence-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4">Beast Social.</h1>
          <p className="text-sm md:text-base mb-4">
            This is a social media app using React, featuring functionality like profiles, posts, and responsive design.
          </p>
          <span className="block text-xs md:text-sm">Do you have an account?</span>
          <Link to={'/login'}>
            <button className="mt-4 my-10 px-6 md:px-16 py-2 bg-white hover:bg-gray-200 text-purple-700 rounded text-sm font-bold">
              Login
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="left flex-1 h-56 lg:h-auto w-full text-white p-8 lg:p-16 flex flex-col justify-center items-center lg:items-start"
        >
          <h1 className="text-2xl md:text-3xl text-gray-500 mb-5 font-bold">Register</h1>
          <input
            {...register('username', { required: true })}
            type="text"
            className="mt-4 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-full"
            placeholder="Username"
          />
          <input
            {...register('email', { required: true })}
            type="email"
            className="mt-4 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-full"
            placeholder="Email"
          />
          <input
            {...register('password', { required: true })}
            type="password"
            className="mt-4 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-full"
            placeholder="Password"
          />
          <input
            {...register('name')}
            type="text"
            className="mt-4 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-full"
            placeholder="Name"
          />
          <button className="mt-8 px-6 py-2 bg-[#8e80db] hover:bg-[#7a65ee] text-white rounded text-sm font-bold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
