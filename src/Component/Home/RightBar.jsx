import React from 'react'

const RightBar = () => {
  return (
    <div className='flex-[3] bg-secondary min-w-[420px] flex-col overflow-y-scroll pb-5 bg-red-90 max-2xl:hidden h-[calc(100vh-50px)]'>
      <div className='p-2 bg-primary border-[1px] border-bordercol mt-5 mr-3 ml-3 rounded-md flex-col flex gap-3 pb-5' style={{
        WebkitBoxShadow: '6px 7px 41px -22px rgba(120,116,120,1)',
        MozBoxShadow: '6px 7px 41px -22px rgba(120,116,120,1)',
        boxShadow: '6px 7px 41px -22px rgba(120,116,120,1)'
      }}>
        <p className='text-sm text-textsec font-semibold mb-'>Suggestions for You</p>
        {/* one card of chat */}
        <div className='flex items-center justify-between bg-gree-50 h-[35px] '>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
          </div>
          <div className='flex items-center gap-3'>
            <button className='border-none outline-none bg-blue-600 text-white font-semibold text-xs py-1 px-2'>follow</button>
            <button className='border-none outline-none bg-red-600 text-white font-semibold text-xs py-1 px-2'>dismiss</button>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px'>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
          </div>
          <div className='flex items-center gap-3'>
            <button className='border-none outline-none bg-blue-600 text-white font-semibold text-xs py-1 px-2'>follow</button>
            <button className='border-none outline-none bg-red-600 text-white font-semibold text-xs py-1 px-2'>dismiss</button>
          </div>
        </div>
      </div>

      <div className='p-2 bg-primary border-[1px] border-bordercol mt-5 mr-3 ml-3 rounded-md flex-col flex gap-3 pb-5' style={{
        WebkitBoxShadow: '6px 7px 41px -22px rgba(125,124,125,1)',
        MozBoxShadow: '6px 7px 41px -22px rgba(125,124,125,1)',
        boxShadow: '6px 7px 41px -22px rgba(125,124,125,1)'
      }}>
        <p className='text-sm text-textsec font-semibold mb-'>Latest Activites</p>
        {/* one card of chat */}
        <div className='flex items-center justify-between bg-gree-50 h-[35px] '>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <p className='text-xs text-textsec'>changed profile picture</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-xs text-textsec'>1 min ago</p>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] '>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <p className='text-xs text-textsec'>changed profile picture</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-xs text-textsec'>1 min ago</p>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] '>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <p className='text-xs text-textsec'>like the post</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-xs text-textsec'>1 min ago</p>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] '>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <p className='text-xs text-textsec'>changed profile picture</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-xs text-textsec'>1 min ago</p>
          </div>
        </div>
      </div>

      <div className='p-2 bg-primary border-[1px] border-bordercol mt-5 mr-3 ml-3 rounded-md flex-col flex gap-3 pb-5' style={{
        WebkitBoxShadow: '6px 7px 41px -22px rgba(125,124,125,1)',
        MozBoxShadow: '6px 7px 41px -22px rgba(125,124,125,1)',
        boxShadow: '6px 7px 41px -22px rgba(125,124,125,1)'
      }}>
        <p className='text-sm text-textsec font-semibold mb-'>Latest Activites</p>
        {/* one card of chat */}
        <div className='flex items-center justify-between bg-gree-50 h-[35px] relative'>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <span className='w-2 h-2 bg-green-600 absolute rounded-full top-1 left-7'></span>
          </div>
          <div className='flex items-center gap-3'>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] relative'>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <span className='w-2 h-2 bg-green-600 absolute rounded-full top-1 left-7'></span>
          </div>
          <div className='flex items-center gap-3'>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] relative'>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <span className='w-2 h-2 bg-green-600 absolute rounded-full top-1 left-7'></span>
          </div>
          <div className='flex items-center gap-3'>
          </div>
        </div>
        <div className='flex items-center justify-between bg-gree-50 h-[35px] relative'>
          <div className='flex gap-3 items-center mb- cursor-pointer  px-2 py- rounded-md'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="h-7 w-7 rounded-full object-cover" alt="" />
            <span className='text-textprim'>Mihir Patel</span>
            <span className='w-2 h-2 bg-green-600 absolute rounded-full top-1 left-7'></span>
          </div>
          <div className='flex items-center gap-3'>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default RightBar