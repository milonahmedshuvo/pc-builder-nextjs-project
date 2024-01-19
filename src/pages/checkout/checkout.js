import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { products, totaltk } = useSelector((state) => state.cart);
  console.log("checkout", products);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 px-1  md:px-20  my-24">
      <div className="">
       

        {products?.map((product, i) => (
          <div key={i}>
            <div className="flex justify-between items-center my-4">

              <div className="flex items-center gap-6 ">
                <div>
                  <img
                    className="w-[90px] h-[60px] "
                    src={product.images}
                    alt=""
                  />
                </div>

                <div className="text-sm">Quantity: {product.quantity} </div>
              </div>



              <div>
                <p className="text-sm" >TK, {product.tk}</p>
              </div>
            </div>
          </div>
        ))}

        
      <div className="flex justify-between items-center border-t-2 pt-2 border-red-300">
        <p>Subtotal: </p>
        <p>TK, {totaltk} </p>
      </div>


        {/* parant  */}
      </div>

      <div className="">
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

export default Checkout;
Checkout.getLayout = function getLayout (page) {
    return <RootLayout> {page} </RootLayout>
}
