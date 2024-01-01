import RootLayout from "@/components/layout/RootLayout";
import { pcproductsAdd } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";


const ThreeProductPage = ({products}) => {
const { prodcuts } = products;
console.log(prodcuts)
const dispatch = useDispatch()





// const [isButtonDisabled, setButtonDisabled] = useState(false);

  
//   const handleButtonClick = (product) => {
//     console.log("prooooooo", product)
//     setButtonDisabled(true);
//     dispatch(pcproductsAdd(product))
//   };



  return (
    <div>
        

       <div>
           {
            prodcuts.map( (product, i) => ( <div className="flex  flex-col lg:flex-row justify-between items-center my-10 shadow-md  px-1 md:px-3 lg:px-7 xl:px-10 py-10 md:py-3 lg:py-7 xl:py-10  " key={i} > 
                
                <div className="flex flex-col md:flex-row items-center ">
                    <div className="w-full lg:w-1/4 flex justify-center ">
                    <img  className="" src={product.image} alt="" />
                    </div>

                    <div>
                      <p className="lg:text-xl text-lg font-medium my-2">{product.productName}</p>
                        <ul>
                          {
                            product.keyFeatures.map((list, i) => <li key={i}  className=" lg:my-1 text-sm"> {list} </li>)
                          }
                        </ul>
                    </div>
                </div>




                {/* button and price  */}
                <div className="mt-10 lg:mt-0" >

                  <Link href="/pc-builder/PCBuilder" >
                  <button onClick={() => dispatch(pcproductsAdd(product))  }   className="bg-[#F26E21] px-5 py-2 text-white font-semibold text-xl my-2 " type="button"> Add </button>
                   </Link>
                
                 
                  <p className="text-xl mt-4"> {product.price} </p>
                </div>

            </div> ) )
           }
       </div>
    </div>
  )
}

export default ThreeProductPage;
ThreeProductPage.getLayout = function getLayout (page) {
  return <RootLayout> {page} </RootLayout>
}


export const getServerSideProps = async (context) => {
    const { id } = context.params;
    console.log(id)

    const res = await fetch(`http://localhost:5000/categoris/${id}`)
    const data = await res.json()

    return {
        props: {
            products: data
        }
    }
}

