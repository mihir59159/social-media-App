import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Registration = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({ name: '', email: '', username: '', password: '' });
  };

  const onError = (error) => {
    console.log("error " + error);
  }
  return (
    <div className="h-screen w-screen m-0 p-0 bg-[rgb(193,190,255)] flex justify-center items-center">
      <div className="container flex justify-center items-center w-[60vw] bg-white rounded-md overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit, onError)} className="right flex-1 h-full w-full text-gray-700 p-16">
          <h1 className='text-3xl text-gray-500 mb-5 font-bold ml-2'>Register</h1>
          <input {...register("username", { required: true })} type="text" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-[95%] mx-auto' placeholder='Username' />
          <input {...register("email", { required: true })} type="email" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3  w-[95%] mx-auto' placeholder='Email' />
          <input {...register("password", { required: true })} type="password" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3  w-[95%] mx-auto' placeholder='Password' />
          <input {...register("name")} type="text" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3  w-[95%] mx-auto' placeholder='Name' />
          <button className='px-16 mt-10 py-2 bg-[#8e80db] hover:bg-[#7a65ee] text-white rounded-sm text-sm font-bold'>Register</button>
        </form>
        <div className="left flex-1 h-full w-full text-white px-16 py-24" style={{
          backgroundImage: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url('https://images.pexels.com/photos/30159228/pexels-photo-30159228/free-photo-of-charming-narrow-street-in-aix-en-provence-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover,cover', // Ensures the image covers the container
          backgroundPosition: 'center,center', // Centers the image
          backgroundRepeat: 'no-repeat,no-repeat', // Prevents repeating
          // background: `gradient(rgba(39,11, 96, 0.5), rgba(39, 11, 96, 0.5)))`
        }}>
          <h1 className='text-6xl my-2 font-[900] mb-7'>Beast Social.</h1>
          <p className='my-3 text-sm'>this is social media app using react,in this some functionlity like profile and post and also responsive</p>
          <span className='block text-xs '>Do you have an account?</span>
          <Link to={'/login'}>
            <button className='px-16 py-2 my-2 bg-white hover:bg-gray-200 text-purple-700 rounded-sm mt-10 text-sm font-bold'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Registration