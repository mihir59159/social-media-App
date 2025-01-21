import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContex } from '../../utils/AuthContex';

const Login = () => {

    const{login} = useContext(AuthContex);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        login(data);
        navigate("/")
        reset({ username: '', password: '' });
    };
    const onError = (error) => {
        console.log("error " + error);
    }
    return (
        <div className="h-screen w-screen m-0 p-0 bg-[rgb(193,190,255)] flex justify-center items-center">
            <div className="container flex justify-center items-center w-[60vw] bg-white rounded-md overflow-hidden">
                <div className="left flex-1 h-full w-full text-white p-16" style={{
                    backgroundImage: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url('https://images.pexels.com/photos/30159228/pexels-photo-30159228/free-photo-of-charming-narrow-street-in-aix-en-provence-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                    backgroundSize: 'cover,cover', // Ensures the image covers the container
                    backgroundPosition: 'center,center', // Centers the image
                    backgroundRepeat: 'no-repeat,no-repeat', // Prevents repeating
                    // background: `gradient(rgba(39,11, 96, 0.5), rgba(39, 11, 96, 0.5)))`
                }}>
                    <h1 className='text-6xl my-2 font-[900] mb-7'>Hello World.</h1>
                    <p className='my-3 text-sm'>this is social media app using react,in this some functionlity like profile and post and also responsive</p>
                    <span className='block text-xs '>Don't you have an account?</span>
                    <Link to={'/registration'}>
                        <button className='px-16 py-2 my-2 bg-white hover:bg-gray-200 text-purple-700 rounded-sm mt-10 text-sm font-bold'>Register</button>
                    </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit, onError)} className="right flex-1 h-full w-full text-gray-700 p-16">
                    <h1 className='text-3xl text-gray-500 mb-5 font-bold ml-2'>Login</h1>
                    <input {...register('username', { required: true })} type="text" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3 w-[95%] mx-auto' placeholder='Username' />
                    <input {...register('password', { required: true })} type="password" className='mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-sm px-3  w-[95%] mx-auto' placeholder='Password' />
                    <button className='px-16 mt-10 py-2 bg-[#8e80db] hover:bg-[#7a65ee] text-white rounded-sm text-sm font-bold'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login