import ImageCarousel from "./ImageCarousel";

const images = [
     'https://gadgetandgear.com/img/shop-by-brand-logos/samsung--logo.6cbd101b.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/mi--logo.09f5a4c9.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/vivo-logo.2838a9fe.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/oppo--logo.c73ce52e.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/one-plus-logo.a1b7ea75.png',
     'https://gadgetandgear.com/img/shop-by-brand-logos/realme-logo.d6683117.png'
  ];


  const imagestwo = [
     'https://dvf83rt16ac4w.cloudfront.net/upload/media/1697016522744936.png',
     'https://dvf83rt16ac4w.cloudfront.net/upload/media/1696921741654137.jpeg',
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705405162805776.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/170540329445539.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705480068639651.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705404044548681.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705404324988304.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705404989575590.png",
     "https://dvf83rt16ac4w.cloudfront.net/upload/media/1705405061561714.png"
  ];



const Shop = () => {
  return (
    <div className="mt-36 mb-24">
        <h1 className="text-center text-3xl md:text-4xl text-[#1D1D1B] rubik ">SHOP BY BRANDS</h1>

         {/* <div className="grid grid-cols-7 w-5/6 mx-auto mt-8 md:mt-16 lg:mt-24 ">
          {
            images.map((img, index) => <div key={index} > 
              <img className="w-3/4" src={img} alt="" />
            </div> )
          }
         </div> */}


         <div className="flex justify-between items-center mt-4 md:mt-7 lg:mt-10 border md:px-2 md:py-2 ">
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
