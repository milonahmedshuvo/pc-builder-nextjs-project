

const TopSelling = ({topselling}) => {


   console.log("topselling/", topselling)




  return (
    <div className="mt-16 mb-10">
       
       <div className="hover:shadow-xl duration-150">
       <img src="https://gadgetandgear.com/img/home-new/top-selling-banner.de5b405d.png" alt="" />
       </div>



       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {
          topselling.map((product, i) => <div key={product._id} className=" p-4" >

             <div className="flex justify-center items-center">
              <img src={product.images} alt="" />
             </div>

             <div className="flex justify-center items-center ">
                <img className=" w-1/6" src={product.logo} alt="" />
             </div>


             <p className="rubik text-[16px] font-semibold text-[#1D1D1B] text-center ">{product.title}</p>


             <p className="rubik text-[16px] font-semibold text-[#F26E21] text-center mt-10 ">{product.tk}</p>



             <div className="grid grid-cols-2 gap-6 mt-5 ">
              <button type="button" className="text-[#3197E9] bg-[#EAF4FD] border border-[#A0CEF4] rounded py-3 px-1 font-semibold text-base " >ADD TO CART</button>
              <button type="button" className="text-[#F26E21] bg-[#FEF0E8] border border-[#F9BC98] rounded py-3 px-1 font-semibold text-base ">Buy now</button>
             </div>
          </div>)
        }
       </div>




    </div>
  )
}

export default TopSelling;





// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/topSellingProducts")
//   const data = await res.json()
  
//   console.log(data)


//   return {
//     props: {
//       prod: data
//     }
//   }
// }
