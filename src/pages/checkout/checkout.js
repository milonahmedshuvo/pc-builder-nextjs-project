import Image from "next/image";
import { useSelector } from "react-redux";

const checkout = () => {
     const { products } = useSelector((state) => state.cart)
     console.log( "checkout", products)
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 px-1  md:px-20  my-24">
      <div className="border border-red-400">

        <p>products</p>

          {
            products?.map((product, i) => <div key={i}> 
                <p> {product.images} ddddddd</p>
            </div>)
          }

        <div className="flex justify-around items-center">

          <div  className="flex items-center  " >

            <div >
             <img className="w-[90px] h-[60px] " src="https://images.unsplash.com/photo-1681667958928-856129627dc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

            <div> quantity 4</div>
          </div>

           <div>
            <p>TK, 00</p>
           </div>

        </div>




       {/* parant  */}
      </div>
















      <div className="border border-green-300">
        <p className="font-medium">Shipping information</p>

        <form action="">
          <div className="mt-1">
            <p className="text-sm">Name</p>
            <input
              type="text"
              name="name"
              className="border rounded w-full md:w-2/3 md:py-1 "
            />
          </div>

          <p className="mt-5 text-sm">Shipping address</p>
          <input
            type="email"
            name="name"
            placeholder="Email"
            className="border rounded w-full md:w-2/3 md:py-1 "
          />
          <input
            type="text"
            name="name"
            placeholder="Address"
            className="border rounded w-full md:w-2/3 md:py-1 "
          />

          <p className="mt-4 text-sm">Payment datails</p>
          <p className="text-xs mt-2">Cart info</p>
          <input
            type="text"
            name="name"
            placeholder="986 456767 334"
            className="border rounded w-full md:w-2/3 md:py-1 "
          />
          <input
            type="date"
            name="name"
            placeholder="Email"
            className="border rounded w-full md:w-2/3 md:py-1 "
          />

          <button
            type="submit"
            className="bg-gray-500 text-white font-semibold py-1 w-full md:w-2/3 mt-7"
          >
            pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default checkout;
