

const TopSelling = ({topselling}) => {


   console.log("topselling/", topselling)




  return (
    <div className="mt-16 mb-10">
       
       <div className="hover:shadow-xl duration-150">
       <img src="https://gadgetandgear.com/img/home-new/top-selling-banner.de5b405d.png" alt="" />
       </div>



       <div className="grid grid-cols-4">
        {
          topselling.map((product, i) => <div key={product._id}  >

             <div>
              <img src={product.images} alt="" />
             </div>

             <img src={product.logo} alt="" />

             <p>{product.tk}</p>



             <div className="flex justify-between ">
              <button type="button">ADD TO CART</button>
              <button type="button">Buy now</button>
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
