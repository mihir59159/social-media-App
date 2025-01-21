import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GoHome, GoSun } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { IoNotificationsOutline } from 'react-icons/io5'
import { LuMoon } from 'react-icons/lu'
import { PiEnvelopeOpen } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { AuthContex } from '../../utils/AuthContext'

const NavBar = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme');
  const {curruser} = useContext(AuthContex);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  const changeTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
    );
  }

  return (
    <div className='container min-w-[100vw] w-[100vw] flex items-center z-50 justify-between fixed top-0 bg-primary h-[50px] px-5 border-b-bordercol border-b-[0.5px]'>
      <div className="left w-full flex items-center gap-5">
        <Link to={'/'} className='font-bold text-textprim'>BeastSocial</Link>
        <GoHome className='icon text-textsec' />
        {(theme === 'light-theme') ? <LuMoon onClick={() => changeTheme()} className='icon text-textsec' /> : <GoSun onClick={() => changeTheme()} className='icon text-textsec' />}
        <AiTwotoneAppstore className='icon  text-textsec' />
        <div className="search flex items-center border-bordercol border py-1 px-2 gap-3 rounded-md">
          <IoIosSearch className='icon text-textsec' />
          <input type="text" className='w-[500px] max-sm:hidden max-md:w-[100px] max-lg:w-[250px] border-none outline-none text-sm bg-transparent' placeholder='Search' />
        </div>
      </div>
      <div className="right w-full flex items-center gap-5 justify-end">
        <BsPerson className='icon text-textsec max-xs:hidden' />
        <PiEnvelopeOpen className='icon text-textsec max-xs:hidden' />
        <IoNotificationsOutline className='icon text-textsec max-xs:hidden' />
        <div className="profile flex items-center justify-center gap-3">
          <Link to={`profile/${curruser.userId}`}>
          <div className='h-[30px] w-[30px] rounded-full' style={{
            backgroundImage: `url(${curruser.profilePic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}></div></Link>
          <span className='text-textsec max-xs:hidden'>{curruser.name}</span>
        </div>
      </div>
    </div>

  )
}

export default NavBar