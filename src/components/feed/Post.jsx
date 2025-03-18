import { HeartIcon, PinIcon } from "lucide-react";

const Post = ({
    pinned = false,
    date,
    tag,
    title,
    content,
    image,
}) => {
    return (
        <div className="w-full py-4 padding-x rounded-lg text-white">
            {pinned && (
                <div className="flex items-center text-gray-400 text-sm mb-2">
                    <PinIcon className="h-4 w-4 mr-1" /> Pinned Post
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
                        <p className="font-semibold flex items-center gap-1">
                            Stivcode <span className="text-yellow-400">✨</span>
                        </p>
                        <p className="text-gray-400 text-sm">{date}</p>
                    </div>
                    {/* Etiqueta */}
                    <span className="bg-gray-500 w-fit text-sm px-2 py-1 rounded-full text-white">
                        {tag}
                    </span>
                </div>
            </div>

            {/* Contenedor post */}
            <div className="ml-12">
                <h2 className="text-xl font-bold mt-2">{title}</h2>
                <p className="text-gray-300 mt-1">{content}</p>
                {image && (
                    <img src={image} alt="Post content" className="rounded-lg object-center object-cover border mt-3 w-[520px] h-[420px]" />
                )}
                <div className="flex justify-end items-center text-gray-400 mt-3 md:mr-16">
                    <HeartIcon className="h-6 w-6 cursor-pointer hover:text-red-500" />
                </div>
            </div>
        </div>
    );
};

export default Post;
