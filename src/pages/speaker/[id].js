import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/Speaker/ProductCard';
import { data } from 'autoprefixer';
import React from 'react'

const SpeakerProductDatails = ({speakerProducts}) => {
    const { products} = speakerProducts;
    // console.log( " ddddddddd", products)
    // console.log(speakerProducts)


  return (
    <div>
        
        <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto relative mt-10 mb-20 ">

      <div className=" col-span-12 md:col-span-3 z  space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start  md:sticky top-16 h-[calc(100vh-650px)] md:h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase text-center md:text-start">Availability</h1>
          <div className="flex items-center space-x-2 mt-3">
          <input type="checkbox" className="toggle" checked />

          <input type="checkbox" class="toggle" checked />
          

            {/* <Switch id="in-stock" /> */}
            {/* <Label htmlFor="in-stock">In stock</Label> */}
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">

          <input type="range" min={0} max="100" value="40" className="range range-primary" />

         
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
        {products?.map((product) => (
          <ProductCard product={product} />
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


export const getServerSideProps =async (context) =>{
    const {id} = context.params 

    const res = await  fetch(`http://localhost:5000/speaker/${id}`)
    const data = await res.json()

    return {
        props: {
            speakerProducts: data
        }
    }

}