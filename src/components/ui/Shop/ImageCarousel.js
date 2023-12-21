// components/ImageCarousel.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out transform translate-x-[calc(-100%*var(--index))]">
        {images.map((image, index) => (
          <div key={index} className="w-[300px]  flex-shrink-0 relative h-[300px]">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              fill // Use layout="fill" to make the image fill its container
              objectFit="cover" // Adjust objectFit as needed
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
