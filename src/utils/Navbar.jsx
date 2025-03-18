import { NavLink } from "react-router-dom";

const navLinks = [
    { name: "Feed", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Guestbook", path: "/guestbook" }
];

const Navbar = () => {


    return (
        <nav className="w-full py-4 my-4 padding-x">
            <div className="w-full flex justify-between items-center md:gap-6 transition-all ease-in-out">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `relative px-4 py-2 font-semibold transition-all ease-in-out text-sm ${isActive ? "text-white border-b-3 border-b-[var(--primary-500)]" : "text-gray-500"
                            }`}>

                        {link.name}

                        {/* Barra inferior animada con ID para modificar en CSS */}
                        <div className="flex justify-center transition-all ease-in-out" >
                            <span id="nav-indicator" className={({ isActive }) => `${isActive ? "w-full" : "w-0"}`} ></span>
                        </div>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
