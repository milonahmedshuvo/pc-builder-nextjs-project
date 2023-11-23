import Image from 'next/image'
import React from 'react'

const Footer = () => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 py-20'>

       <div className='border border-red-300 w-full md:w-3/4'>
         <Image
             src="https://www.ryanscomputers.com/assets/images/ryans-logo.svg"
             width={100}
             height={500}
             alt="Picture of the author"
        />
        <p className='mt-6 text-[#6B7280] text-lg leading-[35px] tracking-wide '>
        Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile set of pre-designed UI components to build modern web applications.
        </p>
       </div>


       <div className='border border-green-500 flex flex-col md:flex-row justify-around'>
            <div>
              <p className='text-[#6B7280] text-lg tracking-wide'>Company Datails</p>
               <p className='mt-4 text-[#6B7280] tracking-wide'>About us</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Blog</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Online Datails</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>payment system</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Trams and conditions</p>
            </div>    

            <div>
              <p className='text-[#6B7280] mt-1 text-lg tracking-wide'>Customer Support</p>
              <p className='mt-4 text-[#6B7280] tracking-wide '>About us</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Blog</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Online Datails</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>payment system</p>
               <p className='text-[#6B7280] mt-1 tracking-wide'>Trams and conditions</p>
            </div>
       </div>
    </div>
  )
}

export default Footer
