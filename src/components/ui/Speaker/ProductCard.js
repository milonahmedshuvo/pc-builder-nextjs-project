import Link from "next/link"

const ProductCard = ({product}) => {
    console.log(product)


  return (
    <div>
       <div>
      <div className="rounded-2xl h-[400px] flex flex-col md:items-start md:justify-start items-center p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link href={`/speaker/product-details/${product.id}`} className="w-full flex flex-col items-center ">
          <img src={product?.images} className="" alt="product" />
          <h1 className="text-xl font-semibold">{product?.name}</h1>
        </Link>
        {/* <p>Rating: {product?.rating}</p> */}
        <p className="text-sm">
          {/* Availability: {product?.status ? 'In stock' : 'Out of stock'} */}
        </p>
        <p className="text-sm">{product?.title}</p>
        <p className="text-sm">Price: {product?.price}</p>
        <button variant="default">
          Add to cart
        </button>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
