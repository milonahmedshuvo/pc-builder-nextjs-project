import Link from "next/link";
import React from "react";

const Categoris = ({ categori }) => {
  const { images, name, _id } = categori;

  console.log(images);
  return (
    <div>
      <Link href={`/categori/${_id}`}>
        <div >
          <img className="w-20 h-20 mx-auto" src={images} alt="" />
          <p className="text-center mt-2 rubik  text-[#6B7280] text-lg">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Categoris;
