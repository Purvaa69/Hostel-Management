import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Header() {
    return (
        <header className='w-full bg-[rgba(255,255,255,0.8)] h-24 flex items-center justify-center text-black text-xl z-10 bg-opacity-50 sticky top-0'>
            <div className=' flex  justify-around w-full'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex w-xl'>
                    <ul className='flex justify-around w-full'>
                        <li>
                            <NavLink to='/' className={({isActive}) => `${isActive ? "underline": "text-black"}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Services' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Gallery' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/About' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact' className={({isActive}) => `${isActive ? "underline": "text-black hover:text-gray-600"}`}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li className="relative group">
  <span className="cursor-pointer text-black hover:text-blue-500 px-4 py-2 block">
    USER ▾
  </span>
  <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded-md shadow-lg mt-1 min-w-[160px] z-50 transition-all duration-200 ease-in-out">
    <li>
      <NavLink to="/student" className="block px-4 py-2 hover:bg-blue-100 text-gray-700">
        Student
      </NavLink>
    </li>
    <li>
      <NavLink to="/owner" className="block px-4 py-2 hover:bg-blue-100 text-gray-700">
        Owner
      </NavLink>
    </li>
    <li>
      <NavLink to="/admin" className="block px-4 py-2 hover:bg-blue-100 text-gray-700">
        Admin
      </NavLink>
    </li>
  </ul>
</li>

                    </ul>
                </div>
            </div>
        </header>

        
    )
}

export default Header
