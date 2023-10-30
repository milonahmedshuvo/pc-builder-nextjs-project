import RootLayout from "@/components/layout/RootLayout"
import Randomproducts from "@/components/ui/randomproducts/Randomproducts";




const HomePage = ({prodcuts}) => {
  
  return (
    <div>
       <h1 className="text-red-400 text-4xl">home page root: </h1>
       <Randomproducts prodcuts={prodcuts} ></Randomproducts>
    </div>
  )
}

export default HomePage;


export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products")
  const data = await res.json()
  

  return {
    props:{
      prodcuts: data
    }
  }
}



HomePage.getLayout = function getLayout (page){
  return <RootLayout> {page} </RootLayout>
}