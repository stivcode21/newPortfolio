import React from 'react'
import Banner from '../utils/Banner'
import Header from '../utils/Header'
import InfoStiv from '../utils/InfoStiv'
import Navbar from '../utils/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className="w-full h-full grid grid-cols-1 place-items-center bg-[var(--bg-dark)]">
            <div className='w-96 h-96 fixed bottom-0 right-0 bg-[url(/koala-v06.png)] bg-no-repeat bg-contain opacity-5 z-0'></div>
            <Header />
            <div className='pt-16 w-full md:w-[750px] h-full text-white z-20'>{ }
                <Banner />
                <InfoStiv />
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default MainLayout