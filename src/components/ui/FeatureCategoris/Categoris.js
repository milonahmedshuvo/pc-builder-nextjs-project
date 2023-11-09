import React from 'react'



const Categoris = ( {categori} ) => {
  const {images, name, _id} = categori;

  console.log(images)
  return (
    <div>
        <div>
          <img className='w-20 h-20 mx-auto' src={images} alt="" />
          <p className='text-center mt-2'>{name}</p>
        </div>      
    </div>
  )
}

export default Categoris;
