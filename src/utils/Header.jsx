import { MoonIcon } from "@heroicons/react/24/solid"

const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between bg-opacity-50 z-100 bg-[var(--bg-dark)]/70 backdrop-filter backdrop-blur-lg padding-x'>
            <img src="./logo-koalav01.png" alt="logo-koala-Stivcode" className="w-13 h-13" />
            <MoonIcon className="w-8 h-8 text-white" />
        </div>
    )
}

export default Header