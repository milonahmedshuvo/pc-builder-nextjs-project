import Link from 'next/link';
import React from 'react'

const Randomproduct = ({product}) => {
const {image, productName, category, price, Status, Rating, discription, _id } =product;

  return (
    <div className=' px-4  py-10 shadow-sm bg-[#FEFEFE]'>
        
        <div>
          <img src={image} className='w-full h-[300px] px-10'  alt="" />
        </div>

        <div className='flex flex-col justify-between  '>
        <p className='hover:text-[#ef4a23] text-[17px] md:text-[20px] my-2'>{productName}</p>
        <p className='mb-[2px] text-[14px] md:text-[18px]'>Category: {category}</p>
        <p className='mb-[2px] text-[14px] md:text-[18px]'>Status: {Status}</p>
        <p className='mb-[2px] text-[14px] md:text-[18px]'>Rating: {Rating}</p>
        <div className='flex justify-between'>
        <p className='mb-1 text-[14px] md:text-[18px]'>Price: <span className='text-[#ef4a23]'>{price}</span> </p>

       
         <Link href={`/RandomproDatails/${_id}`}>
         <button type="button" className='text-[#F26E21] bg-[#FEF0E8] rubik border border-[#F9BC98] px-4 rounded   py-1'>Datails</button>
         </Link>

        </div>
        </div>
        
    </div>
  )
}

export default Randomproduct
