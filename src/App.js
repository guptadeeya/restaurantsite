// For authentication we are using firebase in this project

import React from 'react'
import { useEffect } from 'react'
import { Header } from './components'
import { MainContainer } from './components'
import { CreateContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

function App() {

    const [{ foodItems }, dispatch] = useStateValue();

    const fetchData = async () => {
        await getAllFoodItems().then((data) => {
            // console.log(data);
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data
        })
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {/* AnimatePresence make sure that all the animations are under this app.js */}
            <AnimatePresence mode='wait'>
                <div className='w-screen h-auto flex flex-col bg-primary'>
                    <Header />
                    <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
                        <Routes>
                            <Route path='/*' element={<MainContainer />} />
                            <Route path='/createItem' element={<CreateContainer />} />
                        </Routes>
                    </main>
                </div>
            </AnimatePresence>
        </>
    );
}

export default App
