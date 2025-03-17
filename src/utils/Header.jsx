import { MoonIcon } from "@heroicons/react/24/solid"

const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between bg-opacity-50 z-100 bg-[var(--bg-dark)]/70 backdrop-filter backdrop-blur-lg px-8'>
            <img src="./logo-koalav01.png" alt="logo-koala-Stivcode" className="w-12 h-12" />
            <MoonIcon className="w-7 h-7 text-white" />
        </div>
    )
}

export default Header