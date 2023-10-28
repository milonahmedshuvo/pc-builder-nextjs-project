import React, { useState } from 'react'
import Dropdown from '../ui/Dropdown'
import logo from "../../image/builder.png"


const Navber = () => {

  


  return (
    <div className='border border-red-500 bg-[#FFFFFF] shadow-xl flex  justify-between items-center py-4'>
         <div>
          
          <img src={logo} alt="" />
          
         </div>

         <div className='flex justify-between'>
              {/* dropdown manu  */}
              <div className='right-manu  relative mx-6'>
          
          <button type="button" className='manu-btn'>catagory</button>
          <div className='drowpdown py-4 border-t-4 border-green-400 shadow-xl absolute hidden min-w-[109px] z-[1px]'>
            <a href="" className='block'>Home</a>
            <a href="" className='block'>Home</a>
            <a href="" className='block'>Home</a>
            <a href="" className='block'>Home</a>
            
          </div>
            
            
         </div>


         {/* button  */}
         <div className='mx-8'>
            <button>PC Builder</button>
         </div>
         </div>
    </div>   
  )
}

export default Navber
