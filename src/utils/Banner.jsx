import {
  LinkIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { Github } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="w-full text-white rounded-lg">
        {/* Header con animación */}
        <div className="relative w-full h-60 bg-[#cce7ff] flex justify-center items-center">
          {/* Simulación de animación con un avión */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/523/523140.png"
            alt="Flying plane"
            className="w-20 animate-bounce"
          />
          <div className="flex justify-center absolute -bottom-20 left-12">
            <img
              src="./logo-koalav2.png" // Reemplaza con la imagen real
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 object-cover border-[#121212]"
            />
          </div>
        </div>
        {/* Botón de follow */}
        <div className="px-2 w-full flex justify-end mt-6">
          <button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-900 text-white font-bold py-2 px-4 rounded-full  cursor-pointer active:scale-90 transition-all duration-100 ease-in-out">
            Follow{" "}
            <span className="text-sm cursor-pointer">
              <Github size={20} />
            </span>
          </button>
        </div>

        {/* Contenido Principal */}
        <div className="px-2 mt-8">
          {/* Nombre y descripción */}
          <h2 className="text-3xl font-bold">Stiven Tapasco</h2>
          <p className="text-gray-400 mt-2">
            Brings ideas to life with code! ✨
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Senior Web Engineer. Creative Developer. Content Creator. Whimsical
            Specialist.
          </p>

          {/* Información extra */}
          <div className="flex justify-start gap-4 mt-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <BriefcaseIcon className="w-4 h-4 text-gray-500" />
              Available
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon className="w-4 h-4 text-gray-500" />
              <a href="#" className="text-[var(--primary-500)]">
                /links
              </a>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
              Joined Feb 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
