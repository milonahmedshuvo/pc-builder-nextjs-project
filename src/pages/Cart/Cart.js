import RootLayout from '@/components/layout/RootLayout';
import React from 'react'
import { FaBeer } from 'react-icons/fa';

const Cart = () => {

    
  return (

    <div>
       <h1>cart page</h1>


       <div>
           {/* item 1 */}
            <div className='grid grid-cols-3 gap-4'>
                 {/* img */}
                  <div className='border '>
                    <img src="" alt="" />
                  </div>

                  {/* titile and price  */}
                  <div className='border '>
                    <p>Smart watch</p>
                    <p>price </p>
                  </div>

                  {/* update products  */}
                  <div className='border '>
                    <p>increase</p>
                    <FaBeer></FaBeer>
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
