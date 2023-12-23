import RootLayout from '@/components/layout/RootLayout';
import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";



const Cart = () => {

    
  return (

    <div className='mt-8 mb-24'>

       <div className='flex justify-between items-center'>
        <p>My Cart(1)</p>
         <p>Continue shopping</p>
       </div>


       <div>
       <div className='flex justify-between  w-full mt-14 mb-5'>
                
                  <div className='w-1/2 '>
                    Product
                  </div>
            
                  <div className='w-1/2 flex justify-between items-center'>           
                       <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold '>QUANTITY</p>
                        <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold' >UNIT PRICE</p>
                         <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold' > SUBTOTAL</p>
                  </div>

            </div>











           {/* item 1 */}
            <div className='flex justify-between border w-full'>
                 {/* img */}
                  <div className='border w-1/2 '>
                    <img src="https://static.gadgetandgear.com/image/100x130/fit/tmp/product/20220923_1663932121_316007.jpeg" alt="" />
                  </div>

                  
                  <div className='w-1/2 flex justify-between items-center'>

                    
                       <div className='border py-3 px-2 w-40 flex justify-between items-center'>
                          <button type="button" className='text-lg' > <FaPlus /> </button>
                           <p className='text-lg' >1</p>
                          <button type="button" className='text-lg' > <FaMinus /> </button>
                       </div>

                       <div>
                       not available
                       </div>

                       <div>
                         sub total
                       </div>
                  </div>
            </div>
       </div>
    </div> 
  )
}

export default Cart;

Cart.getLayout = function getLayout ( page ) {
    return <RootLayout> { page } </RootLayout>
}
