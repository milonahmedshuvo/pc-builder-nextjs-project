import ImageCarousel from "./ImageCarousel";

const images = [
    'https://gadgetandgear.com/img/shop-by-brand-logos/apple-logo.b2a3b2f7.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/samsung--logo.6cbd101b.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/mi--logo.09f5a4c9.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/vivo-logo.2838a9fe.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/oppo--logo.c73ce52e.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/one-plus-logo.a1b7ea75.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/realme-logo.d6683117.png'
  ];


  const imagestwo = [
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20220723_1658552304_683774.jpeg',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20220426_1650969204_678587.png',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20210613_1623563603_424445.png',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20180424_1524556350_397920.png',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20180424_1524553084_790662.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/oppo--logo.c73ce52e.png',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20201119_1605764036_861751.jpeg',
     'https://static.gadgetandgear.com/image/230x120/fit/tmp/brand/20200620_1592629726_432690.png'
  ];



const Shop = () => {
  return (
    <div className="mt-36 mb-24">
        <h1 className="text-center text-3xl md:text-4xl text-[#1D1D1B] rubik ">SHOP BY BRANDS</h1>

         <div className="grid grid-cols-7 w-5/6 mx-auto mt-8 md:mt-16 lg:mt-24 ">
          {
            images.map((img, index) => <div key={index} > 
              <img className="w-3/4" src={img} alt="" />
            </div> )
          }
         </div>


         <div className="grid grid-cols-8 mt-4 md:mt-7 lg:mt-10 border md:px-2 md:py-2 ">
          {
            imagestwo.map((img, index) => <div key={index} className="" > 
              <img src={img} alt="" />
            </div> )
          }
         </div>
    </div>
  )
}

export default Shop
