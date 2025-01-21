import React, { useContext } from 'react'
import { AuthContex } from '../../utils/AuthContex'
import Story from './Story';

const Stories = () => {

    const { curruser } = useContext(AuthContex);

    const stories = [{
        id: 1,
        name: "mihir patel",
        profilePic: "https://images.pexels.com/photos/30227637/pexels-photo-30227637/free-photo-of-stylish-man-in-sunglasses-modeling-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {
        id: 2,
        name: "charvin kamali",
        profilePic: "https://images.pexels.com/photos/30296400/pexels-photo-30296400/free-photo-of-portrait-of-young-man-outdoors-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {
        id: 3,
        name: "daivik patel",
        profilePic: "https://images.pexels.com/photos/30282527/pexels-photo-30282527/free-photo-of-portrait-of-a-man-in-black-tank-top-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, {
        id: 4,
        name: "vinayak rathod",
        profilePic: "https://images.pexels.com/photos/30279227/pexels-photo-30279227/free-photo-of-portrait-of-man-with-taped-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        name: "janki patel",
        profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 4,
        name: "hony thokor",
        profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },{
        id: 4,
        name: "hony thokor",
        profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }  ,{
        id: 4,
        name: "hony thokor",
        profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }     
    ]
    return (
        <div className='h-[200px] max-w-[100%] max-sm:h-[80px] pb-2 flex gap-3 overflow-x-scroll'>
            <div className='flex-1 h-full min-w-[138px] max-sm:min-w-[70px] max-sm:rounded-full bg-green-50 rounded-lg relative overflow-hidden'>
                <img src={curruser.profilePic} className='h-full w-full object-cover' alt="" />
                <span className='absolute max-sm:hidden  bottom-0 left-2 text-white font-semibold'>{curruser.name}</span>
                <span className='absolute bg-blue-600 max-sm:bottom-2 h-7 w-7 bottom-7 left-2 cursor-pointer text-white font-semibold text-center flex items-center justify-center text-2xl pb-1 rounded-full'>+</span>
            </div>
            {stories.map((story) => <Story key={story.id} data={story} />)}
        </div>
    )
}

export default Stories