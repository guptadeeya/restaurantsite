import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'

const HomeContainer = () => {
    return (
        <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center justify-cneter gap-2 bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                    </div>
                </div>
                <p className='text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor'>
                    The fastest delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt earum dolorem laudantium doloremque! Voluptatibus, ducimus dignissimos! Facilis repellat deleniti esse!</p>

                <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-700 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center'>
                <img src={HeroBg} className='ml-auto h-400 w-full lg:w-auto lg:h-600' alt="bgimage" />
                
                <div></div>
            </div>
        </section>
    )
}
export default HomeContainer
