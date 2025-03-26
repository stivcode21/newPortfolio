import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

// Array de imágenes para el slider
const sliderImages = [
    "/images/pexels-1.jpg",
    "/images/pexels-2.jpg",
    "/images/pexels-3.jpg",
    "/images/pexels-4.jpg",
    "/images/pexels-5.jpg",
];

// Array de imágenes para el contenedor principal
const containerImages = [
    "/images/pexels-1.jpg",
    "/images/pexels-2.jpg",
    "/images/pexels-3.jpg",
    "/images/pexels-4.jpg",
    "/images/pexels-5.jpg",
];

const ImageSlider = () => {
    const [selectedImage, setSelectedImage] = useState(containerImages[0]); // Imagen destacada
    const sliderRef = useRef(null);
    const slidesRef = useRef([]);

    // Opciones del slider
    const splideOptions = {
        perPage: 2,
        perMove: 1,
        type: 'loop',
        arrows: true,  // Flechas de navegación
        pagination: false,
        drag: true,  // Permite arrastrar con el mouse
        keyboard: 'global',
        focus: 'center',
        gap: '10px',
        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 2 },
        },
    };

    // Observador para detectar cuando un slide está al 50% de visibilidad
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const index = parseInt(entry.target.dataset.index);
                        setSelectedImage(containerImages[index]); // Muestra la imagen relacionada
                    }
                });
            },
            { threshold: 0.5 }
        );

        slidesRef.current.forEach((slide) => {
            if (slide) observer.observe(slide);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex relative flex-col items-center w-full max-w-4xl mx-auto">
            {/* Imagen destacada */}
            <div className="w-full max-h-[400px] flex justify-center items-center mb-4">
                <img
                    src={selectedImage}
                    alt="Preview"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Carrusel con Splide */}
            <Splide ref={sliderRef} options={splideOptions} className="w-1/2 absolute bottom-10 right-20 z-20 border">
                {sliderImages.map((img, i) => (
                    <SplideSlide key={i} ref={(e) => (slidesRef.current[i] = e)} data-index={i}>
                        <div className="cursor-pointer border-2 border-transparent hover:border-blue-500 rounded-lg">
                            <p>{img}</p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default ImageSlider;
