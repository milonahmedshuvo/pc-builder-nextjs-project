import RootLayout from "@/components/layout/RootLayout"
import FeatureCategoris from "@/components/ui/FeatureCategoris/FeatureCategoris";
import Slider from "@/components/ui/Slider/Slider";
import TopSelling from "@/components/ui/TopSelling/TopSelling";
import Randomproducts from "@/components/ui/randomproducts/Randomproducts";




const HomePage = ({prodcuts, categoris}) => {
 console.log("multipule fetch", categoris)
  
  return (
    <div className="">
       <Slider></Slider>
       <TopSelling></TopSelling>
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