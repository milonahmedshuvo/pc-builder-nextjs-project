import RootLayout from "@/components/layout/RootLayout"
import Arrivalhome from "@/components/ui/Arrival/Arrivalhome";
import Belkin from "@/components/ui/Belkin/Belkin";
import Collections from "@/components/ui/Collections/Collections";
import Deals from "@/components/ui/Deals/Dealshome";
import FeatureCategoris from "@/components/ui/FeatureCategoris/FeatureCategoris";
import Offerproducts from "@/components/ui/Offerproducts/offerproducts";
import Shop from "@/components/ui/Shop/Shop";
import Slider from "@/components/ui/Slider/Slider";
import Speakerhome from "@/components/ui/Speaker/Speakerhome";
import TopSelling from "@/components/ui/TopSelling/TopSelling";
import Randomproducts from "@/components/ui/randomproducts/Randomproducts";





const HomePage = ({prodcuts, categoris, topselling, speakerImg, arrivalproducts, dealsproducts }) => {
      
  
  return (
    <div className="mx-2">
       <Slider></Slider>

       {/* <Randomproducts prodcuts={prodcuts} />
       <FeatureCategoris categoris={categoris} /> */}
       
        <TopSelling topselling={topselling} />
        <Speakerhome speakerImg={speakerImg} />
        <Offerproducts />
        <Arrivalhome arrivalproducts={arrivalproducts} />
        <Belkin />
        <Deals dealsproducts={dealsproducts} />
        <Collections />
        <Shop />
       {/* <Randomproducts prodcuts={prodcuts} />
       <FeatureCategoris categoris={categoris} /> */}
    </div>
  )
}

export default HomePage;

export const getStaticProps  = async () => {
  const res1 = await fetch("https://shuvotech.vercel.app/products")
  const data = await res1.json()
  
  const res2 = await fetch("https://shuvotech.vercel.app/categoris")
  const data2 = await res2.json() 

  const res3 = await fetch("https://shuvotech.vercel.app/topSellingProducts")
  const data3 = await res3.json()

  const res = await fetch("https://shuvotech.vercel.app/spekerfourImg")
  const speakerdata = await res.json()

  const resArri = await fetch("https://shuvotech.vercel.app/arrivalproducts")
  const products = await resArri.json()

  const resDeals = await fetch("https://shuvotech.vercel.app/dealsproducts")
  const dealsData = await resDeals.json()
  

  return {
    props:{
      prodcuts: data,
      categoris:data2,
      topselling: data3,
      speakerImg: speakerdata,
      arrivalproducts : products,
      dealsproducts: dealsData 
    }
  }
}





HomePage.getLayout = function getLayout (page){
  return <RootLayout> {page} </RootLayout>
}