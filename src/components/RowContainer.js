import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({ flag, data, scrollValue }) => {
    const RowContainer = useRef()
    // console.log(data);

    const [items, setItems] = useState([])

    /// eslint-disable-next-line
    const [{ cartItems }, dispatch] = useStateValue();

    const addToCart = () => {
        // console.log(item);

        dispatch({
            type : actionType.SET_CARTITEMS,
            // destructuring cart items
            cartItems : items,
        });
        // to prevent the cart from updating to zero on refreshing we;ll apply below code
        localStorage.setItem("cartItems",JSON.stringify(items));
    };

    useEffect(() => {
        RowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue])

useEffect( ()=>{
    addToCart()
}, [items])

    return (

        // haan aari h accha mtlb mujhe phle sare storage m add krne pdenge firebase m??

        // below classname is a dynamic string
        <div ref={RowContainer} className={`w-full flex my-10 gap-4 scroll-smooth bg-rowBg ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center h-200'}`}>

            {data && data.length > 0 ? data.map(item => (
                <div key={item?.id} className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] my-12 backdrop-blur-lg bg-cardOverlay rounded-lg py-2 px-4 hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
                    <div className='w-full flex items-center justify-between'>
                        <motion.div whileHover={{ scale: 1.2 }} className='w-40 h-40 -mt-8 drop-shadow-2xl'>
                            <img src={item?.imageURL} alt="" className="w-full h-full object-contain" />
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.75 }} className='w-8 h-8 rounded-full bg-red-400 flex items-center justify-center cursor-pointer hover:shadow-md' onClick={() => setItems([...cartItems, item])}>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>

                    <div className='w-full flex flex-col items-end justify-end'>
                        <p className='text-textcolor font-semibold text-base md:text-lg'>
                            {item?.title}
                        </p>

                        <p className='mt-1 text-sm text-gray-500'> {item?.calories} </p>

                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-textColor font-semibold'>
                                <span className='text-sm text-red-500'>$</span>{item?.price}
                            </p>
                        </div>
                    </div>
                </div>
            )) :
                <div className='w-full flex flex-col items-center justify-center'>
                    <img src={NotFound} className='h-300' alt='Not found' />
                    <p className='text-xl text-headingColor font-semibold my-3'>Items Not Available</p>
                </div>
            }
        </div>
    )
}

export default RowContainer
