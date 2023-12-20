import Link from "next/link";

const ArrivalproductsDatails = ({ product }) => {
  const { images, title, balance, logo, discription } = product;


  
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
            <Link
              href="/"
              className="bg-[#3197E9] text-white border py-3 px-1   font-semibold text-sm md:text-sm lg:text-md   text-center "
            >
              <button type="button">ADD TO CART</button>
            </Link>

            <Link
              href="/"
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

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log("front end thke", id);
  const res = await fetch(`http://localhost:5000/arrivalproducts/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
