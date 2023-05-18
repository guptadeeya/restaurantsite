import React, { useState } from 'react'
import Logo from '../img/logo.png'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md"
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      // Below comment is nothing but used to ignore the warning that is caused by refreshToken in this
      // eslint-disable-next-line
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
      // console.log(response);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    else {
      setIsMenu(!isMenu)
    }
  };

  // function performed after logout button is clicked
  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }

  return (
    //p is for padding
    <header className="fixed z-50 w-screen p-4 px-6 md:p-6 md:px-16 bg-primary">

      {/* for desktops and tablets  */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        {/* gap is the classname used for gap between differet items */}
        <Link to="/" className='flex items-center gap-2'>
          {/* Logo link img */}
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>Gupta</p>
        </Link>
        <div className='flex items-center gap-8'>
          {/* ml-auto is classname used for marginleft-auto which pushes the items to the right side */}
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-10'>

            {/* text-base is 16px */}
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
              onClick={() => setIsMenu(false)}
            >Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
              onClick={() => setIsMenu(false)}
            >Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
              onClick={() => setIsMenu(false)}
            >About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'
              onClick={() => setIsMenu(false)}
            >Services</li>
          </motion.ul>

          <div className='relative flex items-center justify-center' onClick={showCart}>
            <MdShoppingBasket className='text-textColor text-3xl cursor-pointer' />
            {cartItems && cartItems.length > 0 && (
              <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
            )}
          </div>

          <div className='relative'>
            <motion.img whileTap={{ scale: 0.6 }} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' src={user ? user.photoURL : Avatar}
              // the above src shows that if user is present then its profile will be shown otherwise avatar
              alt="userProfile" onClick={login} />

            {
              isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  opacity={{ opacity: 1, scale: 1 }}
                  className='w-40 bg-green-50 rounded-lg shadow-xl flex flex-col absolute top-12 right-0'>

                  {user && user.email === "guptadeeya12@gmail.com" && (
                    <Link to={"/createItem"}>
                      <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all duration-100 ease-in-out'
                        onClick={() => setIsMenu(false)}
                      >New Item <MdAdd /> </p>
                    </Link>
                  )}

                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all duration-100 ease-in-out' onClick={logout}>Logout <MdLogout /></p>
                </motion.div>
              )
            }
          </div>
        </div>

      </div>
      {/* For mobiles */}
      <div className='flex md:hidden items-center justify-between w-full h-full'>

        <div className='relative flex items-center' onClick={showCart}>
          <MdShoppingBasket className='text-textColor text-3xl cursor-pointer' />
          {cartItems && cartItems.length > 0 && (
              <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
            )}
        </div>

        <Link to="/" className='flex items-center gap-2'>
          {/* Logo link img */}
          <img src={Logo} className='w-8 object-cover' alt="Logo" />
          <p className='text-headingColor text-xl font-bold'>Gupta</p>
        </Link>

        <div className='relative'>
          <motion.img whileTap={{ scale: 0.6 }} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' src={user ? user.photoURL : Avatar}
            // the above src shows that if user is present then its profile will be shown otherwise avatar
            alt="userProfile" onClick={login} />

          {
            isMenu && (
              <motion.div
                initial={{ opacity: 0., scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                opacity={{ opacity: 1, scale: 1 }}
                className='w-40 bg-green-50 rounded-lg shadow-xl flex flex-col absolute top-12 right-0'>

                {user && user.email === "guptadeeya12@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /> </p>
                  </Link>
                )}
                <ul className='flex flex-col'>

                  {/* text-base is 16px */}
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-300 px-4 py-2'>Home</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-300 px-4 py-2'>Menu</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-300 px-4 py-2'>About Us</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-300 px-4 py-2'>Services</li>
                </ul>
                <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-300 gap-3 cursor-pointer hover:bg-gray-500 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout /></p>
              </motion.div>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header
