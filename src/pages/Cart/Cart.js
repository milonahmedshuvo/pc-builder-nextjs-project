import RootLayout from '@/components/layout/RootLayout';
import React from 'react'


const Cart = () => {
  return (
    <div>
       <h1>cart page</h1>
    </div>
  )
}

export default Cart;

Cart.getLayout = function getLayout ( page ) {
    return <RootLayout> { page } </RootLayout>
}
