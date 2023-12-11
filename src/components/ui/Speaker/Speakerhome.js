import Link from "next/link";
import React from "react";

const Speakerhome = ({ speakerImg }) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  md:gap-1 mt-14">
        {speakerImg.map((img, i) => (
          <div key={img._id} className="flex justify-center">
            <Link href={`http://localhost:3000/speaker/${img._id}`} > 
            <img className="w-full md:mx-2" src={img.images} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakerhome;
