import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

const Home = () => {
  return (
    <div className='flex-6 mt-[] text-textprim max-w-[calc(100vw-310px-420px)] bg-secondary max-2xl:max-w-[calc(100vw-310px)] max-sm:max-w-[100vw]  py-5 px-3 overflow-y-auto hidde'  style={{
      // maxWidth:'calc(100vw)',
      maxHeight:'calc(100vh - 50px)'
      }}>
      <Stories/>
      <Posts></Posts>
    </div>
  )
}

export default Home