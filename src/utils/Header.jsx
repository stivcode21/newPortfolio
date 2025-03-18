import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useThemeStore } from "../store/themeStore";

const Header = () => {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className='fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between bg-opacity-50 z-100 bg-[var(--bg-dark)]/70 backdrop-filter backdrop-blur-lg px-6 md:px-8'>
            <img src="./logo-koalav01.png" alt="logo-koala-Stivcode" className="w-12 h-12" />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (
                    <SunIcon className="w-7 h-7 text-white" />
                ) : (
                    <MoonIcon className="w-7 h-7 text-black" />
                )}
            </button>
        </div>
    )
}

export default Header