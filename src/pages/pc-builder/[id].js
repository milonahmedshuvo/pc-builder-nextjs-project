

const PCBuilderCategori = ({products}) => {
console.log(products)



  return (
    <div>
       <h1>pc builder categori pc builder page dainamic products  </h1>  
    </div>
  )
}

export default PCBuilderCategori;


export const getServerSideProps = async (context) => {
    const { id } = context.params;
    console.log(id)

    const res = await fetch(`http://localhost:5000/categoris/${id}`)
    const data = await res.json()

    return {
        props: {
            products: data
        }
    }
}
