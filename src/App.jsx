import React, { Children, useContext } from 'react'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import LeftBar from './Component/Home/LeftBar'
import NavBar from './Component/Home/NavBar'
import RightBar from './Component/Home/RightBar'
import Profile from './Component/Home/Profile'
import { AuthContex } from './utils/AuthContex';

const App = () => {

  const {curruser} = useContext(AuthContex);
  // console.log("hello ",curruser)

  const Layout = () => {
    return <div className='w-[100vw] h-[calc(100vh-50px)] bg-primary p-0 m-0 relative'>
      <NavBar></NavBar>
      <div className='flex mt-[50px]'>
        <LeftBar ></LeftBar>
        <div className='flex-[6] bg-red-800'>
          <Outlet />
        </div>
        <RightBar></RightBar>
      </div>
    </div>
  }

  const ProtectedRoute = ({ children }) => {
    if (!curruser) {
      return <Navigate to={"/login"} />
    }
    return children
  }
  return (<>
    <Routes>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>}>
        {/* index is - path={'/'} this is show parent path */}
        {/* above two are child route  */}
        <Route index element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/registration' element={<Registration />}></Route>
    </Routes>
  </>
  )
}

export default App