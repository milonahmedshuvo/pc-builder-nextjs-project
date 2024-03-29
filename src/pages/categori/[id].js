import RootLayout from "@/components/layout/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router"


const CategoriProduct = ({ categoriProducts}) => {
            const { prodcuts } = categoriProducts;



        
    
  return (
    <div className="grid grid-cols-3 gap-20 ">
     
      {
        prodcuts.map((product) => ( <div key={product.id} className=' px-4  py-10 shadow-sm bg-[#FEFEFE]'>
        
        <div>
          <img src={product.image} className='w-full h-[300px] px-10'  alt="" />
        </div>
          
        <div className='flex flex-col justify-between  '>
        <p className='hover:text-[#72BF44] text-[20px] my-2'>{product.productName}</p>
        <p className='mb-[2px] text-[18px]'>Category: {product.category}</p>
        <p className='mb-[2px] text-[18px]'>Status: {product.Status}</p>
        <p className='mb-[2px] text-[18px]'>Rating: {product.Rating}</p>
        <div className='flex justify-between'>
        <p className='mb-1 text-[18px]'>Price: <span className='text-[#72BF44]'>{product.price}</span> </p>

       
         <Link href={`/categori/datails/${product.id}`}>
         <button type="button" className='border border-[#72BF44] px-4 rounded hover:bg-[#72BF44] hover:text-white font-medium text-[#72BF44] py-1'>Datails</button>
         </Link>

        </div>
        </div>
        
    </div> ) )
      }
      
    </div>
  )
}

export default CategoriProduct;


// export const getStaticPaths = async () => {
//    const res = await fetch("https://shuvotech.vercel.app/categoris");
//    const data = await res.json()

//    const paths = data.map((categori) => ({
//      params: {id: categori._id}
//    }))

//    return { paths, fallback: true}
// }



export const getServerSideProps = async  ( context ) => {
  const { params } =context;
 
  const res = await fetch(`https://shuvotech.vercel.app/categoris/${params.id}`)
  const data = await res.json()

  return {
    props: {
      categoriProducts: data
    }
  }
} 




CategoriProduct.getLayout = function getLayout (page) {
  return <RootLayout> {page} </RootLayout>
}

