import Image from 'next/image'
import React from 'react'
import techlogo from "../../image/Tech.png"



const Footer = () => {


  return (
   <div>
     <div className='grid grid-cols-1 md:grid-cols-2 pb-10 py-10 border-t-2 px-2 '>

<div className=' w-full md:w-3/4'>
  <Image
      className='w-full md:w-1/4'
      src={techlogo}
      width={100}
      height={500}
      alt="Picture of the author"
 />
 <p className='mt-6 text-[#6B7280] text-lg leading-[35px] tracking-wide hover:text-[#7cc751] duration-500 '>
 Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile set of pre-designed UI components to build modern web applications.
 </p>
</div>


<div className=' flex flex-col md:flex-row justify-around'>
     <div>
       <p className='text-[#6B7280] text-lg tracking-wide hover:text-[#8bdb5c] duration-500'>Company Datails</p>
        <p className='mt-4 text-[#6B7280] tracking-wide hover:text-[#7ece4f] duration-500'>About us</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#89dd58] duration-500'>Blog</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#7ed14d] duration-500'>Online Datails</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#72c243] duration-500'>payment system</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#78c24e] duration-500'>Trams and conditions</p>
     </div>    

     <div>
        <p className='text-[#6B7280] mt-1 text-lg tracking-wide hover:text-[#8bf34f] duration-500'>Customer Support</p>
        <p className='mt-4 text-[#6B7280] tracking-wide hover:text-[#75d33f] duration-500'>About us</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#8be955] duration-500'>Blog</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#80d84d] duration-500'>Online Datails</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#68a545] duration-500'>payment system</p>
        <p className='text-[#6B7280] mt-1 tracking-wide hover:text-[#76c946] duration-500'>Trams and conditions</p>
     </div>
</div>
</div>
     {/* last line text  */}
     <p className='text-center mb-10 text-[#6B7280]'>©2023 All Rights Reserved by PC Builder.</p>
   </div>
  )
}

export default Footer
