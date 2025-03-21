import { PinIcon } from "lucide-react";
import { useThemeStore } from "../../store/themeStore";
import { themes } from "../../theme";
import clsx from "clsx";
import { HeartIcon } from "@heroicons/react/24/solid";

const Post = ({
    pinned = false,
    date,
    tag,
    title,
    content,
    image,
}) => {
    const { theme } = useThemeStore();

    return (
        <div className={clsx("w-full py-4 padding-x rounded-lg", themes[theme].text)}>
            {pinned && (
                <div className={clsx("flex items-center font-medium text-xs mb-2", themes[theme].textGray)}>
                    <PinIcon className="h-4 w-4 mr-1 fill-[#868E96]" /> Pinned Post
                </div>
            )}
            <div className="flex items-center gap-2">
                {/* Logo */}
                <img
                    src="./logo-koalav2.png"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col gap-1">
                    {/* info post */}
                    <div className="flex gap-4 items-center">
                        <p className="font-bold flex items-center gap-1">
                            Stivcode21
                            <span><img src="./Verified.gif" alt="icon-verify" className="w-3 h-3" /></span>
                        </p>
                        <p className={clsx("text-sm", themes[theme].textGray)}>{date}</p>
                    </div>
                    {/* Etiqueta */}
                    <span className="bg-[#495057] w-fit text-sm px-3 py-1 rounded-full text-white">
                        {tag}
                    </span>
                </div>
            </div>

            {/* Contenedor post */}
            <div className="ml-12">
                <h2 className="text-2xl font-bold mt-2">{title}</h2>
                <p className="mt-1">{content}</p>
                {image && (
                    <img src={image} alt="Post content" className="rounded-lg object-center object-cover border mt-3 w-[520px] h-[420px]" />
                )}
                <div className="flex justify-end items-center mt-3 md:mr-16">
                    <HeartIcon className="h-6 w-6 cursor-pointer stroke-2 stroke-[#4C5258] hover:stroke-red-500 fill-transparent hover:fill-red-500" />
                </div>
            </div>
        </div>
    );
};

export default Post;
