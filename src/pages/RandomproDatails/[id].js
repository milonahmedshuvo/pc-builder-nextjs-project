import RootLayout from "@/components/layout/RootLayout";


const RandomProductDatails = ({ product }) => {


  

  const {
    image,
    productName,
    category,
    price,
    Status,
    Rating,
    discription,
    _id,
  } = product;

  // fetch(`https://shuvotech.vercel.app/product/${id}`)
  return (
    <div className="mx-2 md:mx-0">
      <h1 className="mt-5"> Category: {category} </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-14">
        <div className=" ">
          <img src={image} alt="" className="w-2/3 mx-auto " />
        </div>

        {/* prodcuts datails  */}
        <div className=" ">
          <h2 className=" text-[20px] md:text-[24px] text-[#3757CD]">{productName}</h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mt-3">
            <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2">
              Price:<span className="text-black font-semibold"> {price} </span>{" "}
            </p>

            <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2">
              Code:<span className="text-black font-semibold"> {4076} </span>{" "}
            </p>

            <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2 mt-2 lg:mt-0">
              Rating:
              <span className="text-black font-semibold"> {Rating} </span>{" "}
            </p>

            <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2 mt-2 lg:mt-0">
              Status:
              <span className="text-black font-semibold"> {Status} </span>{" "}
            </p>
          </div>

          <div className=" mt-10">
            <p className="text-lg font-normal ">Driscription</p>
            <p className="mt-4 leading-6 text-[#666]">{discription}</p>
          </div>

          <button
            type="button"
            className="text-white text-center bg-[#2C3A96] px-6 py-1 font-semibold  text-md mt-10"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomProductDatails;

RandomProductDatails.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://shuvotech.vercel.app/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps  = async (context) => {
  const { params } = context;

  const res = await fetch(`https://shuvotech.vercel.app/product/${params.id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
