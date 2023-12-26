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
                    <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold ' >Product</p>
                    
                  </div>
            
                  <div className='w-1/2 flex justify-between items-center'>           
                       <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold hidden md:block '>QUANTITY</p>
                        <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold hidden md:block' >OFFER PRICE</p>
                         <p className='lato text-sm tracking-wide text-[#3E3E3E] font-bold hidden md:block' > SUBTOTAL</p>
                  </div>

            </div>








           {
            products.map((product) =>  <div className='flex flex-col md:flex-row justify-between border w-full my-6'>
            {/* img */}
             <div className='flex justify-start items-center gap-3 w-full md:w-1/2 border-red-200 border'>

             <div className='border w-1/4 '>
               <img className='' src={product.images} alt="" />
             </div>

             <div>
               <p className='text-md my-1 text-[#3E3E3E] lato font-semibold hover:text-[#F79637]'>{product.title}</p>
               <p className='text-sm my-1 text-[#3E3E3E] lato' >Color : Silver</p>
               <p className='text-sm my-1 text-[#3E3E3E] lato' >Size : 44mm</p>
               <button className='text-sm text-[#3E3E3E] lato hover:text-[#F79637]'>Remove</button>
             </div>


             </div>

             

             
             <div className=' w-full md:w-1/2 flex justify-between items-center '>


                  <div className='border py-3 px-2 w-28 md:w-40 flex justify-between items-center'>
                     <button type="button" className='text-lg' > <FaPlus /> </button>
                      <p className='text-lg' > {product.quantity} </p>
                     <button type="button" className='text-lg' > <FaMinus /> </button>
                  </div>



                  <div>
                      <p className='lato text-sm md:text-md'> not available </p>
                  </div>



                  <div>
                     <p className='text-sm md:text-md lato font-medium mr-4 md:mr-0' >Tk: {product.tk}</p>
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
