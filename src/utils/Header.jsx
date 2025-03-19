import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useThemeStore } from "../store/themeStore";

const Header = () => {
    const { theme, setTheme } = useThemeStore();

    return (
        <div className={`fixed top-0 left-0 right-0 h-[60px] flex items-center justify-between z-100 backdrop-filter backdrop-blur-lg px-6 md:px-8
            ${theme === "dark" ? "bg-[#16191d]/70" : "bg-[#ecfdf5]/70 shadow shadow-white"}`}>
            <img src="./logo-koalav01.png" alt="logo-koala-Stivcode" className="w-12 h-12" />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? (
                    <SunIcon className="w-7 h-7 cursor-pointer text-white hover:text-[#10b981] hover:scale-105 transition-all" />
                ) : (
                    <MoonIcon className="w-7 h-7 cursor-pointer text-black hover:text-[#10b981] hover:scale-105 transition-all" />
                )}
            </button>
        </div>
    )
}

export default Header