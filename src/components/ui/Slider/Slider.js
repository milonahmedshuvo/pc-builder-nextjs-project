import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaLaptop,
  FaHeadphonesSimple,
  FaRegSun,
  FaWater,
} from "react-icons/fa6";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-girl-receiving-parcel-home-banner-982x500.webp",
    "https://www.startech.com.bd/image/cache/catalog/home/banner/stel-app-free-delivery-app-order-982x500.webp",
    "https://www.startech.com.bd/image/cache/catalog/home/banner/winter-fest/wf-soon-home-banner-982x500.png",
    "https://www.ryanscomputers.com/storage/sliders/02-ROG-Offer-For-GBPL-Landing-Page-main-Slide_1700562579.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-5 shadow">
      <div className="flex  flex-col md:flex-row gap-4 md:gap-10">
        <div className="overflow-hidden  w-full md:w-3/4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full box-border">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* second div  */}
        <div className=" w-full md:w-1/4  flex flex-col gap-3">
          {/* item 1  */}
          <div className="bg-[#e68751] bg-opacity-100 py-2 lg:py-5  ">
            <div className=" mx-10 m-auto">
              <p className="text-white font-medium text-lg text-center">
                Compare Products
              </p>
              <p className="text-white text-sm text-center">
                Choose Two Products to Compare
              </p>

              <div className="flex pl-5 appearance-none border rounded shadow-md  bg-white items-center mt-2 md:mt-1 lg:mt-6">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-1 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email..."
                />
              </div>

              <div className="flex pl-5 appearance-none border rounded shadow-md  bg-white items-center     mt-2">
                <AiOutlineMail className="text-xl text-[#1C1B1F]"></AiOutlineMail>
                <input
                  className="w-full py-1 lg:py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  type="email"
                  placeholder="Enter Your Text..."
                />
              </div>

              <button
                type="button"
                className="text-white md:border-[2px] lg:border-[3px] rounded mt-4 lg:mt-6 border-[#F9BC98] w-full py-1 font-normal lg:font-semibold "
              >
                {" "}
                View Comparison
              </button>
            </div>
          </div>

          {/* items 2  */}
          <div className="">
            <img
              src="https://www.startech.com.bd/image/catalog/home/banner/small/introducing-laptop-finder-home.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* last section card 4 items  */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {/* item 1 */}
        <div className="flex items-center bg-[#F2F4F8]  py-4 px-1">
          <div className="w-14 h-14 rounded-full bg-[#EF4A23] flex justify-center items-center">
            <p className="text-2xl md:text-3xl text-white">
              {" "}
              <FaLaptop></FaLaptop>{" "}
            </p>
          </div>

          <div className="ml-2">
            <p className="font-medium text-md md:text-lg">Laptop Finder</p>
            <p className="text-sm">Find Laptop Easily </p>
          </div>
        </div>

        {/* items 2 */}
        <div className="flex items-center bg-[#F2F4F8] py-1 md:py-4 px-1 ">
          <div className="w-14 h-14 rounded-full bg-[#EF4A23] flex justify-center items-center">
            <p className="text-2xl md:text-3xl text-white">
              {" "}
              <FaWater></FaWater>{" "}
            </p>
          </div>

          <div className="ml-2">
            <p className="font-medium text-md md:text-lg">Raise compiline</p>
            <p className="text-sm">Sheare Experience </p>
          </div>
        </div>

        {/* items 3  */}
        <div className="flex items-center bg-[#F2F4F8] py-4 px-1">
          <div className="w-14 h-14 rounded-full bg-[#EF4A23] flex justify-center items-center">
            <p className="text-2xl md:text-3xl text-white">
              {" "}
              <FaHeadphonesSimple></FaHeadphonesSimple>{" "}
            </p>
          </div>

          <div className="ml-2">
            <p className="font-medium text-md md:text-lg">Online Support</p>
            <p className="text-sm">Get Online Support </p>
          </div>
        </div>

        {/* items 4  */}
        <div className="flex items-center bg-[#F2F4F8] py-4 px-1">
          <div className="w-14 h-14 rounded-full bg-[#EF4A23] flex justify-center items-center">
            <p className="text-2xl md:text-3xl text-white">
              {" "}
              <FaRegSun> </FaRegSun>{" "}
            </p>
          </div>

          <div className="ml-2">
            <p className="font-medium text-sm md:text-lg">Service Center</p>
            <p className="text-sm">Repair your Device </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
