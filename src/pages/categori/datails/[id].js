

const CategoriProductDatails = ({datails}) => {
  



  
  return (
    <div>
        

        {
          datails?.map((product) =>  <div className="mx-2 md:mx-0" key={product.id} >
    
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-14">
            <div className=" ">
              <img src={product.image} alt="" className="w-2/3 mx-auto " />
            </div>
    
            {/* prodcuts datails  */}
            <div className=" ">
              <h2 className=" text-[20px] md:text-[24px] text-[#3757CD]">{product.productName}</h2>
    
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3   mt-3">
                <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2 border">
                  Price:<span className="text-black font-semibold"> {product.price} </span>{" "}
                </p>
    
                
    
                <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2  lg:mt-0 border">
                  Rating:
                  <span className="text-black font-semibold"> {product.Rating} </span>{" "}
                </p>
    
                <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666] text-center mx-2 mt-2 lg:mt-0 border">
                  Status:
                  <span className="text-black font-semibold"> {product.Status} </span>{" "}
                </p>

                
                <p className="bg-[#F5F6FC] py-1 rounded-full text-[#666]  text-center mx-2 mt-2 lg:mt-4 border">
                  Category:<span className="text-black text-sm font-semibold"> {product.category} </span>{" "}
                </p>






              </div>
    
              <div className=" mt-10">
                <p className="text-lg font-normal ">Driscription</p>
                <p className="mt-4 leading-6 text-[#666]">{product.subDiscription}</p>
              </div>

              
              <div className="mt-5">
              <p className="font-medium text-xl  mt-4 mb-2"> Key Features </p>
                <ul>
                  {
                    product.keyFeatures.map((list, i) => <li key={i} className="my-1"> {list} </li>)
                  }
                </ul>

                <p className="font-medium text-xl  mt-5 mb-1" >Reviews: </p>
                <p>{product.Reviews}</p>
              </div>
    
              <button
                type="button"
                className="text-white text-center bg-[#2C3A96] px-6 py-1 font-semibold  text-md mt-10"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>  )
        }


    </div>
  )
}

export default CategoriProductDatails;



export const getServerSideProps = async (context) => {
      const { id } = context.params
      const res = await fetch(`http://localhost:5000/ag/${id}`)
      const data = await res.json()

      return {
        props: {
          datails: data
        }
      }
}



