import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/Speaker/ProductCard';
import Link from 'next/link';
import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from 'react-redux';



const Cart = () => {
      const { products } = useSelector((state) => state.cart)      
      console.log("redux", products )
      const { tk, images, title, quantity } = products;





  return (

    <div className='mt-8 mb-24'>

       <div className='flex justify-between items-center'>
        <p className='text-xl '>My Cart(1)</p>
            <Link href='/' > 
                <button type='button' className='text-[#F79637] border border-[#F79637] px-1 rounded text-sm'>Continue shopping</button>
            </Link>
       </div>


       <div>
       <div className='flex justify-between  w-full mt-14 mb-5'>
                
                  <div className='w-1/2 '>
                    Product
                  </div>
            
                  <div className='w-1/2 flex justify-between items-center'>           
                       <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold '>QUANTITY</p>
                        <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold' >OFFER PRICE</p>
                         <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold' > SUBTOTAL</p>
                  </div>

            </div>








           {
            products.map((product) =>  <div className='flex justify-between border w-full'>
            {/* img */}
             <div className='flex '>

             <div className='border w-1/2 '>
               <img src={product.images} alt="" />
             </div>

             <div>
               <p>{product.title}</p>
             </div>


             </div>

             

             
             <div className='w-1/2 flex justify-between items-center'>


                  <div className='border py-3 px-2 w-40 flex justify-between items-center'>
                     <button type="button" className='text-lg' > <FaPlus /> </button>
                      <p className='text-lg' > {product.quantity} </p>
                     <button type="button" className='text-lg' > <FaMinus /> </button>
                  </div>



                  <div>
                      <p className='rubik'> not available </p>
                  </div>



                  <div>
                     <p>Tk: {product.tk}</p>
                  </div>


             </div>
       </div> )
           }


           {/* item 1 */}
           


















       </div>
    </div> 
  )
}

export default Cart;

Cart.getLayout = function getLayout ( page ) {
    return <RootLayout> { page } </RootLayout>
}
