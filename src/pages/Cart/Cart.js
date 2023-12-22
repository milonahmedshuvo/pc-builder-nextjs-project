import RootLayout from '@/components/layout/RootLayout';
import React from 'react'


const Cart = () => {

    
  return (

    <div>
       <h1>cart page</h1>


       <div>
           {/* item 1 */}
            <div>
                 {/* img */}
                  <div>
                    <img src="" alt="" />
                  </div>

                  {/* titile and price  */}
                  <div>
                    <p>Smart watch</p>
                    <p>price </p>
                  </div>

                  {/* update products  */}
                  <div>
                    <p>increase</p>
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
