import React from 'react'

const Story = ({data}) => {
  return (
    <div className='h-full min-w-[138px] max-sm:min-w-[70px] max-sm:rounded-full bg-green-50 rounded-lg overflow-hidden relative'>
        <img src={data.profilePic} className='h-full w-full object-cover' alt="" />
        <span className='absolute bottom-0 left-2 text-white max-sm:hidden'>{data.name}</span>
    </div>
  )
}

export default Story