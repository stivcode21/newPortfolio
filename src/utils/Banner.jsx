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
            </div>
        </div>
    )
}

export default Banner