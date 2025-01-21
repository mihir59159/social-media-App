import React from 'react'
import Post from './Post';

const Posts = () => {

  const info = [
    {
      id: 1,
      name: "John Smith",
      userId: 101,
      profilePic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        cmt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }],
    },
    {
      id: 2,
      name: "Emily Johnson",
      userId: 102,
      profilePic: "https://images.pexels.com/photos/1008157/pexels-photo-1008157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      postPic: "https://images.pexels.com/photos/1008157/pexels-photo-1008157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Michael Brown",
      userId: 103,
      profilePic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      postPic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      id: 4,
      name: "Sophia Williams",
      userId: 104,
      profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      postPic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      id: 5,
      name: "James Anderson",
      userId: 105,
      profilePic: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      postPic: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    }
  ];

  return (
    <div className='w-full h-full mt-7'>
      {info.map((post) => <Post key={post.id} data={post} />)}
    </div>
  )
}

export default Posts