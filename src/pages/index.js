import RootLayout from "@/components/layout/RootLayout"
import Randomproducts from "@/components/ui/randomproducts/Randomproducts";


import React from 'react'

const HomePage = () => {
  return (
    <div>
       <h1 className="text-red-400 text-4xl">home page root: </h1>
       <Randomproducts></Randomproducts>
    </div>
  )
}

export default HomePage;



HomePage.getLayout = function getLayout (page){
  return <RootLayout> {page} </RootLayout>
}