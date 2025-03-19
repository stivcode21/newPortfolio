import React from 'react'
import Banner from '../utils/Banner'
import Header from '../utils/Header'
import InfoStiv from '../utils/InfoStiv'
import Navbar from '../utils/Navbar'
import { useThemeStore } from '../store/themeStore'

const MainLayout = ({ children }) => {
    const { theme } = useThemeStore();

    return (
        <div className="w-full h-full grid grid-cols-1 place-items-center">
            <div className={`w-72 h-72 md:w-96 md:h-96 fixed bottom-0 right-0 bg-no-repeat bg-contain z-0 
                ${theme === "dark" ? "bg-[url(/koala-v06.png)] opacity-5" : "bg-[url(/koala-v04.png)] opacity-11"}`}></div>
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