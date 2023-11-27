import { useEffect, useState } from 'react';


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp",
        "https://www.startech.com.bd/image/cache/catalog/home/banner/stel-app-free-delivery-app-order-982x500.webp",
      "https://www.startech.com.bd/image/cache/catalog/home/banner/winter-fest/wf-soon-home-banner-982x500.png",
      'https://www.ryanscomputers.com/storage/sliders/02-ROG-Offer-For-GBPL-Landing-Page-main-Slide_1700562579.webp',
      
    ];
  


    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);






  return (
    <div>
      <div className="overflow-hidden w-full">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full box-border">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}


export default Slider;
