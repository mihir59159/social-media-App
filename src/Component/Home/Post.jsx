import React, { useContext, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoShareSocial } from 'react-icons/io5'
import { LiaCommentDots } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import { FcLike } from 'react-icons/fc'
import { AuthContex } from '../../utils/AuthContext'

const Post = ({ data }) => {
    const { curruser } = useContext(AuthContex);
    const[cmt,setCmt] = useState(false);//comment box open or close
    const[like,setLike] = useState(false);
    // console.log(data.comment)
    return (
        <div className='bg-primary p-3 rounded-xl text-textprim mb-7 shadow-xl' >
            <div className="username rounded-xl flex justify-between">
                <div className='flex gap-3 items-center mb-3 cursor-pointer px-2 py-1 rounded-md bg-blue-20'>
                    <img src={`${data.profilePic}`} className="h-10 max-w-10 rounded-full max-h-[500px] object-cover" alt="" />
                    <Link to={`/profile/${data.userId}`} className='bg-red-20'>
                        <span className='text-sm text-textprim font-semibold leading-3'>{data.name}</span>
                        <p className='text-xs text-textsec'>a few second ago</p>
                    </Link>
                </div>
                <div className="right flex mt-2 mr-2 cursor-pointer"><BsThreeDots /></div>
            </div>
            <div className="pic">
                <p className='text-sm text-textprim'>{data.desc}</p>
                <img src={data.postPic} className='my-3' alt="" />
            </div>
            <div className="like flex gap-5 p-1">
                <span className='flex justify-center items-center gap-2 cursor-pointer'>
                    {like ? <FcLike onClick={()=>setLike(!like)} className='text-xl' /> : <IoMdHeartEmpty onClick={()=>setLike(!like)} className='text-xl' />}
                    <p className='text-xs font-semibold '>Likes</p>
                </span>
                <span className='flex justify-center items-center gap-2 cursor-pointer' onClick={()=>setCmt(!cmt)}>
                    <LiaCommentDots className='text-xl' />
                    <p className='text-xs font-semibold '>Comments</p>
                </span>
                <span className='flex justify-center items-center gap-2 cursor-pointer'>
                    <IoShareSocial className='text-xl' />
                    <p className='text-xs font-semibold '>Share</p>
                </span>
            </div>
            {cmt && <div className='flex bg-red-10 p-2 gap-3 mt-2'> 
                <img src={`${curruser.profilePic}`} className="h-10 w-10 rounded-full max-h-[500px] object-cover" alt="" />
                <input type="text" placeholder='write a comment' className='border-bordercol border-[1px] px-2 py-1 w-full bg-transparent outline-none' />
                <button className='text-white bg-blue-500 px-3 text-sm outline-none border-none font-semibold'>Sent</button>
            </div> }
            {cmt && data.comment &&<div className='py-3'>
                {data.comment.map((cmt)=><Comment key={cmt.userId} val={cmt}/>)}
            </div>}
        </div>
    )
}

export default Post