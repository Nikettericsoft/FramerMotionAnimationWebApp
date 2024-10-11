// Carousel.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Carousel.scss';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="carousel-image"
            />
            <button className="carousel-button prev" onClick={prevImage}>
                &lt;
            </button>
            <button className="carousel-button next" onClick={nextImage}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
