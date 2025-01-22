import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../../utils/AuthContex';

const Login = () => {
    const { login } = useContext(AuthContex);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        login(data);
        navigate('/');
        reset({ username: '', password: '' });
    };

    const onError = (error) => {
        console.log('error ' + error);
    };

    return (
        <div className="h-screen w-screen m-0 p-0 bg-[rgb(193,190,255)] flex justify-center items-center">
            <div className="container flex flex-col lg:flex-row justify-center items-center w-[90%] md:w-[80%] lg:w-[60%] max-w-[900px] bg-white rounded-md overflow-hidden">
                {/* Left Section */}
                <div
                    className="left flex-1 h-56 lg:h-auto w-full text-white p-8 lg:p-16 flex flex-col justify-center items-center lg:items-start"
                    style={{
                        backgroundImage: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url('https://images.pexels.com/photos/30159228/pexels-photo-30159228/free-photo-of-charming-narrow-street-in-aix-en-provence-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h1 className="text-3xl lg:text-6xl my-2 font-bold">Hello World.</h1>
                    <p className="text-xs lg:text-sm text-center lg:text-left my-3">
                        This is a social media app using React, featuring profiles, posts, and responsive design.
                    </p>
                    <span className="block text-xs">Don't you have an account?</span>
                    <Link to={'/registration'}>
                        <button className="px-6 py-2 mt-4 bg-white hover:bg-gray-200 text-purple-700 rounded-sm text-xs lg:text-sm font-bold">
                            Register
                        </button>
                    </Link>
                </div>

                {/* Right Section */}
                <form
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="right flex-1 w-full text-gray-700 p-8 lg:p-16 flex flex-col items-center"
                >
                    <h1 className="text-xl lg:text-3xl text-gray-500 font-bold mb-5">Login</h1>
                    <input
                        {...register('username', { required: true })}
                        type="text"
                        className="mt-3 lg:mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-xs lg:text-sm px-3 w-full max-w-[90%]"
                        placeholder="Username"
                    />
                    {errors.username && <span className="text-red-500 text-xs mt-1">Username is required.</span>}
                    <input
                        {...register('password', { required: true })}
                        type="password"
                        className="mt-3 lg:mt-5 outline-none border-b-gray-400 border-b-[1px] py-2 text-xs lg:text-sm px-3 w-full max-w-[90%]"
                        placeholder="Password"
                    />
                    {errors.password && <span className="text-red-500 text-xs mt-1">Password is required.</span>}
                    <button
                        type="submit"
                        className="px-6 lg:px-16 mt-6 lg:mt-10 py-2 bg-[#8e80db] hover:bg-[#7a65ee] text-white rounded-sm text-xs lg:text-sm font-bold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
