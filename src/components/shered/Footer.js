import Image from 'next/image'
import React from 'react'

const Footer = () => {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>

       <div className='border border-red-300 w-full md:w-3/4'>
         <Image
             src="https://www.ryanscomputers.com/assets/images/ryans-logo.svg"
             width={100}
             height={500}
             alt="Picture of the author"
        />
        <p className='mt-6'>
        Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile set of pre-designed UI components to build modern web applications.
        </p>
       </div>


       <div className='border border-green-500 flex flex-col md:flex-row justify-around'>
            <div>
              <p>Company Datails</p>
            </div>    

            <div>
              <p>Customer Support</p>
            </div>
       </div>
    </div>
  )
}

export default Footer
