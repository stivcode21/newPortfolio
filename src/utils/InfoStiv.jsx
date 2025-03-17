import { LinkIcon, CalendarDaysIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { Github } from "lucide-react";

const InfoStiv = () => {
    return (
        <>
            {/* Botón de follow */}
            <div className="padding-x w-full flex justify-end mt-6">
                <button className="button-theme flex items-center gap-2 bg-[var(--primary-500)] hover:bg-[var(--primary-900)] text-white font-bold py-2 px-4 rounded-full transition-all ease-in-out">
                    Follow <span className="text-sm"><Github size={20} /></span>
                </button>
            </div>

            {/* Contenido Principal */}
            <div className="padding-x mt-8">
                {/* Nombre y descripción */}
                <h2 className="text-3xl font-bold">Stiven Tapasco</h2>
                <p className="text-gray-400 mt-2">Brings ideas to life with code! ✨</p>
                <p className="text-gray-400 text-sm mt-2">
                    Senior Web Engineer. Creative Developer. Content Creator. Whimsical Specialist.
                </p>

                {/* Información extra */}
                <div className="flex justify-start gap-4 mt-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4 text-gray-500" />
                        Available
                    </div>
                    <div className="flex items-center gap-1">
                        <LinkIcon className="w-4 h-4 text-gray-500" />
                        <a href="#" className="text-[var(--primary-500)]">/links</a>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4 text-gray-500" />
                        Joined Feb 2024
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoStiv