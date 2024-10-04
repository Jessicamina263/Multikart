import React from "react";
import '../pages/styles.css'; 
import { Link } from 'react-router-dom';

export default function NavBar({ toggleSidebar, openSearchbar }) {
    return (
        <>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <p className="text-sm dark:text-white">Welcome to Our store Multikart</p>
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-white">
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                            <p className="text-sm dark:text-white">Call Us: 123 - 456 - 7890</p>
                        </div>
                        <div style={{marginLeft: 500}}></div>
                            <div className="flex items-center space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-white">
                                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                                <p className="text-sm dark:text-white">Wishlist</p>
                            </div>
                            <div className="dropdown">
                                <button className="flex text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current text-white" style={{marginRight: 10}}>
                                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                                    </svg>
                                    My Account
                                    <svg className="w-2.5 h-2.5 ms-2.5 text-gray-900 dark:text-white" style={{marginTop: 8}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div className="dropdowncontent">
                                    <ul style={{fontSize: 15}}>
                                        <li>
                                            <a href="#" classname="block px-4 py-2 text-black">Login</a>
                                        </li>
                                        <li>
                                            <a href="#" classname="block px-4 py-2 text-black">Register</a>
                                        </li>
                                        <li>
                                            <a href="#" classname="block px-4 py-2 text-black">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
                <div className="px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm" style={{marginLeft: '430px'}}>
                            <li>
                                <button onClick={toggleSidebar} className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-900 rounded-lg dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <img src={require('./images/18.png')} className="h-8" alt="Logo" />
                                </a>
                            </li>
                            <li style={{marginLeft:250}}></li>
                            <li>
                                <div className="relative flex items-center group">
                                    <button className="flex items-center justify-between py-2 px-1 text-gray-900 rounded text-black text-sm">
                                        <Link to="/home" style={{fontWeight: 'bold'}}>HOME</Link>
                                    </button>
                                </div>
                            </li>
                            <li>
                                <a href="">
                                    <div className="relative flex items-center group">
                                        <button className="flex items-center justify-between py-2 px-1 text-gray-900 rounded text-black text-sm">
                                            <Link to="/blog" style={{fontWeight: 'bold'}}>BLOGS</Link>
                                        </button>
                                    </div>
                                </a>
                            </li>
                            <li style={{marginTop: '8px'}}>
                                <div class="dropdown">
                                    <button className="flex" style={{fontWeight: 'bold', fontSize: '15px'}}>
                                        PAGES
                                        <svg className="w-2.5 h-2.5 ms-2.5 text-gray-900" style={{marginTop: 5}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div className="dropdowncontent">
                                        <ul style={{fontSize: 15}}>
                                            <li>
                                                <Link to="" className="block px-4 py-2 text-black" style={{fontWeight: 'normal'}} onClick={openSearchbar}>Search</Link>
                                            </li>
                                            <li>
                                                <Link to="/cart" className="block px-4 py-2 text-black" style={{fontWeight: 'normal'}}>Cart</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="flex items-center justify-between py-2 px-1 text-gray-900 rounded text-black text-sm" onClick={openSearchbar}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-black">
                                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                    </svg>
                                </button>
                            </li>
                            <li style={{marginTop: 10}}>
                                <div class="dropdown">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-black">
                                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                                        </svg>
                                    </button>
                                    <div className="dropdowncontent">
                                        <ul classname="py-2 text-gray-700 dark:text-gray-400" style={{fontSize: 15}}>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-black">Language</a>
                                            </li>
                                            <div className="text-gray-800" style={{fontSize: 14}}>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">English</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">French</a>
                                                </li>
                                            </div>
                                            <li>
                                                    <a href="#" className="block px-4 py-2 text-black">Currency</a>
                                            </li>
                                            <div className="text-gray-800" style={{fontSize: 14}}>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">$ USD</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">₹ IND</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">€ EUR</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 ml-7">£ GBP</a>
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li style={{marginTop: 10}}>
                            <div class="dropdown">
                                    <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 h-6 fill-black">
                                        <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                    </svg>
                                    </button>
                                    <div className="dropdowncontent">
                                        <ul classname="py-2 text-gray-700 dark:text-gray-400" style={{fontSize: 13}}>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-black">Your Cart is empty</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}