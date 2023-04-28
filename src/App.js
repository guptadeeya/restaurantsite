// For authentication we are using firebase in this project

import React from 'react'
import { Header } from './components'
import { MainContainer } from './components'
import { CreateContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"

function App() {
    return (
        <>
        {/* AnimatePresence make sure that all the animations are under this app.js */}
        <AnimatePresence mode='wait'>
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-24 p-8 w-full'>
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
