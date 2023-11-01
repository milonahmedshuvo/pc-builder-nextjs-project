import React from 'react'

const Randomproduct = ({product}) => {
const {image, productName, category, price, Status, Rating, discription } =product;

  return (
    <div className=' px-4  py-10 shadow-sm bg-[#FEFEFE]'>
        
        <div>
          <img src={image} className='w-full h-[300px] px-10'  alt="" />
        </div>

        <div className='flex flex-col justify-between  '>
        <p className='hover:text-[#ef4a23] text-[20px] my-2'>{productName}</p>
        <p className='mb-[2px] text-[18px]'>Category: {category}</p>
        <p className='mb-[2px] text-[18px]'>Status: {Status}</p>
        <p className='mb-[2px] text-[18px]'>Rating: {Rating}</p>
        <div className='flex justify-between'>
        <p className='mb-1 text-[18px]'>Price: <span className='text-[#ef4a23]'>{price}</span> </p>
        <button type="button" className='border border-[#929de2] px-4 rounded  text-[#3749BB] py-1'>Datails</button>
        </div>
        </div>
        
    </div>
  )
}

export default Randomproduct
