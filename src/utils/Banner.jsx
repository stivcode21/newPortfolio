const Banner = () => {
    return (
        <div className="flex items-start justify-center">
            <div className="w-full text-white rounded-lg">
                {/* Header con animación */}
                <div className="relative w-full h-64 bg-[#cce7ff] flex justify-center items-center">
                    {/* Simulación de animación con un avión */}
                    <img
                        src="https://i.redd.it/n5asj8qa4qcc1.gif"
                        alt="Flying plane"
                        className="w-full h-64 object-center object-cover"
                    />
                    <div className="flex justify-center absolute -bottom-20 left-6 md:left-14">
                        <img
                            src="https://i.ibb.co/gb80mXcw/Blue-and-Red-Infinity-Technology-Logo.gif" // Reemplaza con la imagen real
                            alt="Profile"
                            className="w-36 h-36 rounded-full border-4 object-cover object-center border-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner