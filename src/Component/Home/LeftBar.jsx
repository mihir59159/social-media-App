import React, { useContext } from 'react'
import picture1 from '../../assets/1.png'
import picture2 from '../../assets/2.png'
import picture3 from '../../assets/3.png'
import picture4 from '../../assets/4.png'
import picture5 from '../../assets/5.png'
import picture6 from '../../assets/6.png'
import picture7 from '../../assets/7.png'
import picture8 from '../../assets/8.png'
import picture9 from '../../assets/9.png'
import picture10 from '../../assets/10.png'
import picture11 from '../../assets/11.png'
import picture12 from '../../assets/12.png'
import { AuthContex } from '../../utils/AuthContext'
// import picture13 from '../../assets/13.png'


const LeftBar = () => {
    const {curruser} = useContext(AuthContex);
    return (
        <div className='p-3 flex-[2] min-w-[310px] overflow-y-scroll bg-red-90 max-sm:hidden h-[calc(100vh-50px)]'>
            <div className='boreder-[1px] border-b'>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={`${curruser.profilePic}`} className="h-7 w-7 rounded-full object-cover" alt="" />
                    <span className='text-sm text-textprim'>{curruser.name}</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture1} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Friends</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture2} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Groups</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture3} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>MarketPlace</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture4} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Watch</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture5} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Memories</span>
                </div>
            </div>
            <div className='boreder-[1px] border-b px-2'>
                <p className='text-xs font-semibold text-textprim py-4'>Your Shortcurs</p>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture6} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Events</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture7} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Gaming</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture8} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Gallery</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture9} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Videos</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture10} className="h-6 w-6" alt="" />
                    <span className='text-sm text-textprim'>Messages</span>
                </div>

            </div>
            <div className='boreder-[1px] px-2'>
                <p className='text-xs font-semibold text-textprim py-4'>Others</p>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture11} className="h-7 w-7" alt="" />
                    <span className='text-sm text-textprim'> Fundraiser</span>
                </div>
                <div className='flex gap-3 items-center mb-3 cursor-pointer duration-150 hover:bg-bordercol px-2 py-1 rounded-md'>
                    <img src={picture12} className="h-7 w-7" alt="" />
                    <span className='text-sm text-textprim'>Tutorials</span>
                </div>
            </div>
        </div>
    )
}

export default LeftBar