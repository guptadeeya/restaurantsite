import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

const RowContainer = ({ flag }) => { 
    return (
        // below classname is a dynamic string
        <div className={`w-full my-10 bg-rowBg ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>

            <div className='w-300 md:w-340 my-10 h-auto backdrop-blur-lg bg-gray-200 rounded-lg p-2 hover:drop-shadow-lg'>
                <div className='w-full flex items-center justify-between'>
                    <motion.img whileHover={{ scale: 1.2 }} src="https://firebasestorage.googleapis.com/v0/b/restaurantsite-473c7.appspot.com/o/Images%2F1683435354134%20-%20i4.png?alt=media&token=5a0887bd-496b-4dd9-81bc-4bec7df947c9" alt="" className='w-40 -mt-8 drop-shadow-2xl'/>

                    <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-400 flex items-center justify-center cursor-pointer hover:shadow-md'>
                        <MdShoppingBasket className='text-white' />
                    </motion.div>
                </div>

                <div className='w-full flex flex-col items-end justify-end'>
                    <p className='text-textcolor font-semibold text-base md:text-lg'>
                        Chocolate and Vanilla
                        </p>

                        <p className='mt-1 text-sm text-gray-500'>45 Calories</p>

                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-textColor font-semibold'>
                                <span className='text-sm text-red-500'>$</span>5.3
                                </p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RowContainer
