import React, { useContext, useRef, useState } from 'react'
import './navbar.css'
import dataContext from '../../context/DataContext'

const Navbar = () => {
  const {hideCard,isCollapsed} = useContext(dataContext)
  const li1Ref = useRef(null)
  const li2Ref = useRef(null)
  const li3Ref = useRef(null)
  // const {isCollapsed, hideCard} = useContext

  const navButtons = [ li1Ref, li2Ref, li3Ref ]

  const selectFromNavbar = (i) => {
    // e.target.style.backgroundColor = "#6680c142"
    // console.log(e.target)
      navButtons.forEach((elm, index) => {
      if (i === index) {
        elm.current.style.backgroundColor = "#6680c142"
      } else {
        elm.current.style.backgroundColor = ""
      }
    })
  }

  return (
    <nav className="bg-white border-grey-200 dark:bg-white-900  w-full navbar_container" id="navv">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex gap-20 items-center">
          <div style={{ backgroundColor: isCollapsed ? "" : "#6680c142", borderRadius: "5px", width: "40px", height: "40px" }} className='h-screen flex items-center justify-center'
            onClick={() => hideCard()}
          >
            <img src="/assets/hamburg.png" alt="" width="20px" />
          </div>
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <div className='flex gap-3 items-center'>
            <img width="25px" src='/assets/phicode.png' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">PhiScan</span>
          </div>
          <ul className="flex gap-10">
            <li ref={li1Ref} style={{ backgroundColor: "#6680c142", borderRadius: "5px", width: "43px", height: "43px" }} className='h-screen flex items-center justify-center nav_btn' onClick={() => selectFromNavbar(0)}>
              <a href="/" className="block py-2 pl-3 pr-4  rounded md:bg-transparent md:p-0 " aria-current="page">
                <img width='30px' style={{ pointerEvents: "none" }} src='assets/map2.png' /></a>
            </li>
            <li ref={li2Ref} onClick={() => selectFromNavbar(1)} style={{ backgroundColor: "", borderRadius: "5px", width: "43px", height: "43px" }} className='h-screen flex items-center justify-center nav_btn'>
              <img width='30px' src='assets/schedule2.png' style={{ pointerEvents: "none" }} />
            </li>
            <li ref={li3Ref} onClick={() => selectFromNavbar(2)} style={{ backgroundColor: "", borderRadius: "5px", width: "43px", height: "43px" }} className='h-screen flex items-center justify-center nav_btn'><img width='30px' src='assets/calculator2.png' style={{ pointerEvents: "none" }} />
            </li>
            {/* {navButtons.map(elm=> elm)} */}
          </ul>
        </a>

        <div className="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
          </button>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm rounded-lg bg-gray-50  light:bg-gray-700 dark:placeholder-gray-400 light:text-white" style={{ backgroundColor: "#6680c142", color: 'black' }} placeholder="Search..." />
          </div>

          {/* <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
          <div className='ml-10'>
            <img src="/assets/user.png" width="30px" alt="" />
          </div>
        </div>

        {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
        </div> */}
      </div>
    </nav>



  )
}

export default Navbar