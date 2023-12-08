import React from 'react'

const topsellingDatails = ({products}) => {
    const { images, title, balance, logo } = products;


  return (
    <div>
       <h1>Top selling prodcuts datails </h1>
    </div>
  )
}

export default topsellingDatails;



export const getServerSideProps = async (context) => {
    const { id } = context.params
    console.log(id)

     const res = await fetch(`http://localhost:5000/topsellingDainamic/${id}`)
     const data = await res.json()
     

     return {
        props:{
            products: data
        }
     }
};
