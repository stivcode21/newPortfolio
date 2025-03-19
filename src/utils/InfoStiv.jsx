import { LinkIcon, CalendarDaysIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { Github } from "lucide-react";
import { useThemeStore } from "../store/themeStore";
import clsx from "clsx";
import { themes } from "../theme";

const InfoStiv = () => {
    const { theme } = useThemeStore();

    return (
        <>
            {/* Botón de follow */}
            <div className="padding-x w-full flex justify-end mt-6">
                <button className={clsx("button-theme flex items-center gap-2 font-bold py-2 px-4 rounded-full transition-all ease-in-out",
                    themes[theme].buttonTheme
                )}>
                    Follow <span className="text-sm"><Github size={20} /></span>
                </button>
            </div>

            {/* Contenido Principal */}
            <div className="padding-x mt-8">
                {/* Nombre y descripción */}
                <h2 className={clsx("text-3xl font-bold", themes[theme].text)}>Stiven Tapasco</h2>
                <p className={clsx("mt-2", themes.color.textGray)}>Brings ideas to life with code! ✨</p>
                <p className={clsx("text-sm mt-2", themes.color.textGray)}>
                    Senior Web Engineer. Creative Developer. Content Creator. Whimsical Specialist.
                </p>

                {/* Información extra */}
                <div className={clsx("flex justify-start gap-4 mt-4 text-sm font-semibold", themes.color.textGray)}>
                    <div className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" />
                        Available
                    </div>
                    <div className="flex items-center gap-1">
                        <LinkIcon className="w-4 h-4" />
                        <a href="#" className={clsx(themes[theme].textPrimary)}>/links</a>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="w-4 h-4" />
                        Joined Feb 2024
                    </div>
                </div>
            </div>
        </>
    )
}

export default InfoStiv