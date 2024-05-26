import Link from "next/link"


const Dealshome = ( {dealsproducts} ) => {
    

    
  return (
    <div>
        <div className="mt-16 mb-10">
      
      <div className="hover:shadow-xl duration-150">
        <img
          src="https://gadgetandgear.com/img/home-new/deals-banner.af26d3eb.png"
          alt=""
        />
      </div>




      {/* Arrival phone and watch products show  */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-1 mt-4">
        {dealsproducts.map((product, i) => (
          <div key={product._id} className=" p-4">
            <div className="flex justify-center items-center">
               <Link href={`/Deals/${product._id}`} >
              <img src={product.images} alt="" />
              </Link>
            </div>

            <div className="flex justify-center items-center ">
              <img className=" w-1/6" src={product.logo} alt="" />
            </div>

            <p className="rubik text-[16px] font-semibold text-[#1D1D1B] text-center ">
              {product.title}
            </p>

            <p className="rubik text-[16px] font-semibold text-[#F26E21] text-center mt-10 ">Tk, 
              {product.tk}
            </p>

            <div className="grid grid-cols-2 gap-6 md:gap-2 mt-5 ">


               <Link href={`/Deals/${product._id}`} className="text-[#3197E9] bg-[#EAF4FD] border border-[#A0CEF4] rounded py-3 px-1 font-semibold md:text-sm lg:text-md  text-base text-center " >
              <button
                type="button" >
                ADD TO CART
              </button>
              </Link>



              <Link href={`/Deals/${product._id}`}  className="text-[#F26E21] bg-[#FEF0E8] border border-[#F9BC98] rounded py-3 px-1 font-semibold md:text-sm lg:text-lg  text-base text-center " >
              <button
                type="button">
                Buy now
              </button>
              </Link>




            </div>
          </div>
        ))}
      </div>
      

    </div>

    </div>
  )
}

export default Dealshome
