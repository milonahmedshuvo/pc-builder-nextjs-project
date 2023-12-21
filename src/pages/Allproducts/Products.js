import Link from "next/link";


const Products = ({product}) => {



  return (
    <div>
      <div>
        <div className="rounded-2xl h-[400px] flex flex-col hover:text-[#F36D21] md:items-start md:justify-start items-center p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
          <Link
            href={`/speaker/product-details/${product.id}`}
            className="w-full flex flex-col items-center "
          >
            <img src={product?.images} className="" alt="product" />
          </Link>
          {/* <p>Rating: {product?.rating}</p> */}
          <p className="text-sm">
            {/* Availability: {product?.status ? 'In stock' : 'Out of stock'} */}
          </p>
          <p className="text-md lato font-normal">{product?.title}</p>
          <p className="text-sm lato">Price: {product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
