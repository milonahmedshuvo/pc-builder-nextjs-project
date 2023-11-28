import { useEffect, useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";

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
    <div className='flex flex-col md:flex-row gap-4 md:gap-10'>

      <div className="overflow-hidden  w-full md:w-3/4">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full box-border">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>

     {/* second div  */}
      <div className=' w-full md:w-1/4'>

       {/* item 1  */}
        <div className='bg-[#FFE8A1] py-5'>

         <div className='mx-10 m-auto'>

         <p className='text-black font-medium text-lg text-center'>Compare Products</p>
          <p className='text-[#9c9168] text-center'>Choose Two Products to Compare</p>

            
          <div className="flex pl-5 appearance-none border rounded shadow-md  bg-white items-center mt-8">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email..."
                />
              </div>


              <div className="flex pl-5 appearance-none border rounded shadow-md  bg-white items-center mt-2">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Enter Your Text..."
                />
              </div>

          <button type="button" className='text-[#72BF44] border-[3px] rounded mt-8 border-[#72BF44] w-full py-3 font-semibold '> View Comparison</button>
         </div>

        </div>







         
              
           
       
      </div>
    </div>
  )
}


export default Slider;
