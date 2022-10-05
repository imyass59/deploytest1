import React from 'react'
import getCookie from '../Hookes/Cookies/getCookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../Hookes/JWT/getData';

export default function Profile() {
    const navigate = useNavigate();
    const user = useSelector(state => state.UserReducer.UserToken);
    const data = getData();
    const dispatch = useDispatch();
    useEffect(() =>
    {
        if(getCookie("jwt-token")){return;}else{navigate("/");}
        
    },[])
    
  return (
    <>
        <div className="w-11/11 flex justify-center items-center flex-col m-12">
            <div className="flex justify-center items-center pb-10 flex-col lg:flex-row">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-40 w-40 rounded-full object-cover"
                        alt="username"/>
                    <div className="ml-10 w-full">
                        <div className="flex items-center justify-between w-full">
                            <h2 className="block leading-relaxed font-light text-gray-700 text-3xl">Darcy</h2>
                            <a className="cursor-pointer h-7 px-3 ml-3 focus:outline-none hover:border-transparent text-center rounded border border-gray-400 transition-all delay-100 ease-in hover:bg-indigo-500 hover:text-white bg-transparent text-gray-500 font-semibold">Edit Profile</a>
                            <a className="cursor-pointer ml-2 p-1 border-transparent text-gray-700 rounded-full hover:text-indigo-600 focus:outline-none focus:text-gray-600"
                            aria-label="Notifications">
                                <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </a>
                        </div>
                        <ul className="flex justify-around items-center">
                            <li>
                                <span className="text-base flex"><span className="font-bold mr-2">23 </span> Posts</span>
                            </li>
                            <li>
                                <span className="cursor-pointer text-base flex ml-5"><span className="font-bold mr-2">102k </span> Followers</span>
                            </li>
                            <li>
                                <span className="cursor-pointer text-base flex ml-5"><span className="font-bold mr-2">654 </span> Followed</span>
                            </li>
                        </ul>
                        <br />
                        <div className="">
                            <h1 className="text-base font-light">Darcy</h1>
                            <span className="text-base">I am Darcy, I like music, and record videos</span>
                            <a className="block text-base text-indigo-500 mt-2" target="_blank">https://www.linkedin.com/in/ilyass-elkhadiri/</a>
                        </div>
                    </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <article className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2">
                <div className="cursor-pointer relative w-[300px] h-[300px] group transition-all delay-300 ease-in-out">
                    <img src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        className="foto w-full h-full object-cover relative"
                        alt="description" />
                        <div className='flex items-center justify-center cursor-pointer opacity-0 absolute w-[300px] h-[300px] bg-indigo-700 top-0 left-0 transition delay-150 ease-in-out group-hover:opacity-60'>
                            <button className=" text-lg rounded-md text-indigo-500 bg-white px-4 py-2  z-60 absolute">
                                View
                            </button>
                        </div>
                </div>
                <div className="cursor-pointer relative w-[300px] h-[300px] group transition-all delay-300 ease-in-out">
                    <img src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        className="foto w-full h-full object-cover relative"
                        alt="description" />
                        <div className='flex items-center justify-center cursor-pointer opacity-0 absolute w-[300px] h-[300px] bg-indigo-700 top-0 left-0 transition delay-150 ease-in-out group-hover:opacity-60'>
                            <button className=" text-lg rounded-md text-indigo-500 bg-white px-4 py-2  z-60 absolute">
                                View
                            </button>
                        </div>
                </div>
                <div className="cursor-pointer relative w-[300px] h-[300px] group transition-all delay-300 ease-in-out">
                    <img src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        className="foto w-full h-full object-cover relative"
                        alt="description" />
                        <div className='flex items-center justify-center cursor-pointer opacity-0 absolute w-[300px] h-[300px] bg-indigo-700 top-0 left-0 transition delay-150 ease-in-out group-hover:opacity-60'>
                            <button className=" text-lg rounded-md text-indigo-500 bg-white px-4 py-2  z-60 absolute">
                                View
                            </button>
                        </div>
                </div>
            </article>
        </div>
    </>
  )
}
