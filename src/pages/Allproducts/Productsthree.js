import { addToProduct } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const Productsthree = ({product}) => {
  const router = useRouter()
  const dispatch = useDispatch()

  

   const addtoproductStore = () => {
     dispatch(addToProduct(product))
     toast.success("Succesfuly product add!")
   }

  
  return (
    <div>
      <div>
        <div className="rounded-2xl h-[400px] flex flex-col hover:text-[#F36D21] md:items-start md:justify-start items-center p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2 ">
          {/* <Link
            href={`/speaker/product-details/${product.id}`}
            className="w-full flex flex-col items-center "
          > */}
           <div> 
            <img src={product?.images} className="" alt="product" />
            </div>

          {/* </Link> */}
          {/* <p>Rating: {product?.rating}</p> */}
          <p className="text-sm">
            {/* Availability: {product?.status ? 'In stock' : 'Out of stock'} */}
          </p>
          <p className="text-md lato font-normal">{product?.title}</p>
          <p className="text-sm lato">Price: {product?.tk}</p>
          
          <button onClick={()=> addtoproductStore() }  type="button" className="border py-1 px-2 rounded hover:border-[#F36D21] border-black text-black hover:text-[#F36D21] ">Add to cart</button> 
        </div>
        
      </div>
    </div>
  );
};

export default Productsthree
