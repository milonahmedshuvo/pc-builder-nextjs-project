import RootLayout from "@/components/layout/RootLayout";
import { addToProduct } from "@/redux/features/cart/cartSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ArrivalproductsDatails = ({ product }) => {
  const dispatch = useDispatch()
  const { images, title, balance, logo, discription } = product;
  
  const addtocartButton = () => {
        dispatch(addToProduct(product))
        toast.success("Succesfuly product add!")
  }

  const checkoutProduct = () => {
    dispatch(addToProduct(product))
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center mt-10 mb-20">
        <div className="w-full md:w-full lg:w-1/4 ">
          <img className="w-full" src={images} alt="" />
        </div>

        <div className="w-full md:w-full lg:w-3/6 px-10 ">
          <div className="w-24 ">
            <img src={logo} alt="" />
          </div>
          <p className="text-[#3E3E3E] text-2xl md:text-3xl font-bold lato">
            {title}
          </p>
          <p className=" text-lg md:text-xl text-[#3E3E3E] font-bold mt-4 lato ">
            {balance}
          </p>
          <p className="font-normal text-sm text-[#3E3E3E] lato tracking-wide leading-7 mt-8 ">
            {discription}.For Datails..
          </p>

          <p className="text-sm  md:text-md font-semibold mt-4 text-[#3E3E3E]">
            No return applicable if the seal is broken.
          </p>

          <div className="grid grid-cols-2 gap-1 md:gap-2 mt-10 ">
          <button className="bg-[#3197E9] text-white border py-3 px-1   font-semibold text-sm md:text-sm lg:text-md   text-center "
            onClick={() => addtocartButton() }
             type="button">ADD TO CART</button>

            <Link
              href="/checkout/checkout"
              onClick={()=> checkoutProduct() }
              className="bg-[#F26E21] text-white border py-3 px-1 font-semibold md:text-sm lg:text-md  text-base text-center "
            >
              <button type="button">Buy now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrivalproductsDatails;
ArrivalproductsDatails.getLayout = function getLayout (page) {
  return <RootLayout> {page} </RootLayout>
}





export const getStaticPaths = async () => {
  const res = await fetch("https://shuvotech.vercel.app/arrivalproducts");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://shuvotech.vercel.app/arrivalproducts/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
