import React from 'react'

const Speakerhome = ({speakerImg}) => {
    console.log(speakerImg)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-1 my-14" >
      
      {
        speakerImg.map((img, i) => <div key={img._id}>

            <img src={img.images} alt="" />
        </div>)
      }
    </div>
  )
}

export default Speakerhome;
