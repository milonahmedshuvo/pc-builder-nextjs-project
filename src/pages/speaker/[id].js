import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/Speaker/ProductCard';
import { data } from 'autoprefixer';
import React, { useState } from 'react'
// import MultiRangeSlider from "multi-range-slider-react";
// import '@/styles/globals.css'





const SpeakerProductDatails = ({speakerProducts}) => {
    const { products} = speakerProducts;
    // console.log( " ddddddddd", products)
    // console.log(speakerProducts)

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };






  return (
    <div>
        
        <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto relative mt-10 mb-20 ">

      <div className=" col-span-12 md:col-span-3 z  space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start  md:sticky top-16 h-[calc(100vh-650px)] md:h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase text-center md:text-start">Availability</h1>
          <div className="flex items-center space-x-2 mt-3">
          <input type="checkbox" className="toggle" checked />

          <input type="checkbox" class="toggle" checked />
          
          <button
          onClick={handleToggle}
          className={`bg-red-500 pr-7 py-1 px-1 rounded-full focus:outline-none
          }`}
        >
          <span
            className={`block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
              isActive ? "translate-x-full" : ""
            }`}
          >
            {/* {isActive ? (
              <Image src={icon2} width={30} height={30} alt=""></Image>
            ) : (
              <Image src={icon3} width={30} height={30} alt=""></Image>
            )} */}
          </span>
        </button>



            {/* <Switch id="in-stock" /> */}
            {/* <Label htmlFor="in-stock">In stock</Label> */}
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">

          <input type="range" min={0} max="100" value="40" className="range range-primary" />


             {/* new program add  */}
          {/* <div className="my-5">
              <MultiRangeSlider
                min={0}
                max={500}
                step={1}
                ruler={false}
                label={false}
                range={range}
                onChange={handleRangeChange}
              />

              <div>
                Price: {minValue} CFA - {maxValue} CFA
              </div>
            </div> */}


         
            {/* <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            /> */}
          </div>
          <div>From 0$ To $</div>
        </div>
      </div>



      <div className=" col-span-12 md:col-span-9 grid grid-col-1 md:grid-cols-3 gap-10 pb-20">
        {products?.map((product, i ) => (
          <div key={i}> 
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}


export default SpeakerProductDatails;

SpeakerProductDatails.getLayout = function getLayout(page) {
    return <RootLayout> {page} </RootLayout>
}


export const getStaticPaths = async () => {
  const res = await fetch("https://shuvotech.vercel.app/spekerfourImg");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};


export const getStaticProps =async (context) =>{
    const {id} = context.params 

    const res = await  fetch(`https://shuvotech.vercel.app/speaker/${id}`)
    const data = await res.json()

    return {
        props: {
            speakerProducts: data
        }
    }
}