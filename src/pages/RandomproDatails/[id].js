import { useRouter } from "next/router";





const RandomProductDatails = ({product}) => {
    const router = useRouter()
    const id = router.query.id
    console.log("product:", product)



    // fetch(`http://localhost:5000/product/${id}`)

    
    
  return (
    <div>
      <h1> Datails prodcut {id}  </h1>
    </div>
  )
}


export default RandomProductDatails;


export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products")
  const products = await res.json()
  
  const paths = products.map((product) => ({
    params: { id : product._id }
  }))

  return { paths, fallback: false }

}

export const getStaticProps = async (context) => {
  const {params} = context;
  
  const res = await fetch(`http://localhost:5000/product/${params.id}`)
  const data = await res.json()

  return {
    props:{
      product: data
    }
  }
}



