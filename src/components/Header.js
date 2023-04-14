import React from 'react'
import Logo from '../img/logo.png'
import {MdShoppingBasket} from "react-icons/md"

const Header = () => {
  return (
    //p is for padding
    <header className="fixed z-50 w-screen p-6 px-16">

      {/* for desktops and tablets  */}
      <div className='hidden md:flex w-full h-full'>
        {/* gap is the classname used for gap between differet items */}
        <div className='flex items-center gap-2'>
          {/* Logo link img */}
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>Gupta</p>
        </div>

        {/* ml-auto is classname used for marginleft-auto which pushes the items to the right side */}
        <ul className='flex items-center gap-10 ml-auto'>

          {/* text-base is 16px */}
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ease-out cursor-pointer'>Home</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ease-out cursor-pointer'>Menu</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ease-out cursor-pointer'>About Us</li>
          <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in ease-out cursor-pointer'>Services</li>
        </ul>

        <div className='relative flex items-center'>
        <MdShoppingBasket className='text-textColor text-3xl ml-8 cursor-pointer'/>
        <div className='w-5 h-5 rounded-full bg-cartNumBg'>
          <p className='text-xs text-white font-semibold flex items-center justify-center'>2</p>
        </div>
        </div>
      </div>

      {/* For mobiles */}
      <div className='flex md:hidden w-full h-full'>
      </div>
    </header>
  );
};

export default Header
