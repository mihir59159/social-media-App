import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({ val }) => {
    return (
        <div className='flex justify-between'>
            <div className='flex gap-3 items-center mb-3 cursor-pointer px-2 py-1 rounded-md bg-blue-20'>
                <img src={`${val.profilePic}`} className="h-8 w-8 rounded-full max-h-[500px] object-cover" alt="" />
                <Link to={`/profile/${val.userid}`} className='bg-red-20'>
                    <span className='text-sm text-textprim font-semibold leading-3'>{val.name}</span>
                    <p className='text-xs text-textprim'>{val.cmt}</p>
                </Link>
            </div>
            <p className='text-textsec text-xs flex items-center'>1 hour ago</p>
        </div>

    )
}

export default Comment