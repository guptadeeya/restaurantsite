import React from 'react'

const Header = () => {
  return (
    //p is for padding
    <div className="fixed z-50 w-screen bg-blue-300 p-6 px-16">

      {/* for desktops and tablets  */}
      <div className='hidden md:flex w-full h-full'>
      </div>

      {/* For mobiles */}
      <div className='flex md:hidden w-full h-full'>
      </div>
    </div>
  );
};

export default Header
