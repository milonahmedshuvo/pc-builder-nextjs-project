import RootLayout from "@/components/layout/RootLayout"
import FeatureCategoris from "@/pages/FeatureCategoris/FeatureCategoris";
import Randomproducts from "@/components/ui/randomproducts/Randomproducts";




const HomePage = ({prodcuts, categoris}) => {
 console.log("multipule fetch", categoris)
  
  return (
    <div className="">
       <h1 className="text-red-400 text-4xl">home page root: </h1>
       <Randomproducts prodcuts={prodcuts} ></Randomproducts>
       <FeatureCategoris categoris={categoris} ></FeatureCategoris>
    </div>
  )
}

export default HomePage;

export const getStaticProps = async () => {
  const res1 = await fetch("http://localhost:5000/products")
  const data = await res1.json()
  
  const res2 = await fetch("http://localhost:5000/categoris")
  const data2 = await res2.json() 

  return {
    props:{
      prodcuts: data,
      categoris:data2 
    }
  }
}




HomePage.getLayout = function getLayout (page){
  return <RootLayout> {page} </RootLayout>
}