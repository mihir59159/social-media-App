import React, { useContext } from 'react'
import { AuthContex } from '../../utils/AuthContex'
import { LiaFacebook } from 'react-icons/lia';
import { TbBrandInstagram } from 'react-icons/tb';
import { RiTwitterXFill } from 'react-icons/ri';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { FaYoutube } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Post from './Post';

const Profile = () => {
  const { curruser } = useContext(AuthContex);

  const info = [
    {
      id: 1,
      name: curruser.name,
      userId: 101,
      profilePic: curruser.profilePic,
      postPic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      comment: [{
        userId: 102,
        name: "Emily Johnson",
        profilePic: "https://images.pexels.com/photos/1008157/pexels-photo-1008157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cmt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }, {
        userId: 103,
        name: "Michael Brown",
        profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        // postPic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        cmt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }],
    },
    {
      id: 2,
      name: curruser.name,
      userId: 102,
      profilePic: curruser.profilePic,
      postPic: "https://images.pexels.com/photos/1008157/pexels-photo-1008157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  return (
    <div className='w-full bg-secondary max-h-[calc(100vh-50px)] text-textprim relative overflow-y-scroll'>
      <div className='h-[300px] w-full' style={{
        backgroundImage: `url('https://images.pexels.com/photos/3776813/pexels-photo-3776813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>
      <div className="detail relative w-full bg-secondary bg-red-30 flex justify-center p-4">
        <div className='h-[200px] w-[200px] rounded-full absolute mx-auto top-[-100px] z-10' style={{
          backgroundImage: `url(${curruser.profilePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className='bg-blue-10 rounded-lg bg-primary max-sm:flex-col max-sm:mt-10 px-5 pt-9 text-textsec max-w-[720px] h-[230px w-full flex'>
          <div className="logo flex-1 w-full bg-red-20 flex gap-3 flex-wrap my-auto p-5 items-center max-sm:justify-center">
            <a href="/"><LiaFacebook className='text-3xl' /></a>
            <a href="/"><TbBrandInstagram className='text-3xl' /></a>
            <a href="/"><RiTwitterXFill className='text-3xl' /></a>
            <a href="/"><BiLogoLinkedinSquare className='text-3xl' /></a>
            <a href="/"><FaYoutube className='text-3xl' /></a>
          </div>
          <div className="name flex-1 p-5 gap-3 flex flex-col justify-center items-center h-full bg-red-30 pt-20 max-sm:pt-0">
            <h1 className='text-textprim'>{curruser.name}</h1>
            <div className='flex items-center justify-around w-full bg-red-5'>
              <div className='flex flex-1 justify-center items-center '>
                <IoLocationOutline className='text-xs' />
                <p className='text-xs'>IND</p>
              </div>
              <div className='flex flex-1 justify-center items-center'>
                <MdLanguage className='text-xs' />
                <p className='text-xs'>beast.dev</p>
              </div>
            </div>
            <button className='px-3 py-2 rounded-md bg-blue-700 text-white font-semibold text-xs'>Follow</button>
          </div>
          <div className='icon flex-1 p-5 flex justify-end items-center gap-5 max-sm:justify-center'>
            <IoMailOutline className='text-md' />
            <BsThreeDotsVertical className='text-md' />
          </div>
        </div>
      </div>
      <div className='w-full max-w-[720px] mx-auto pb-10'>
        {info.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </div>
  )
}

export default Profile