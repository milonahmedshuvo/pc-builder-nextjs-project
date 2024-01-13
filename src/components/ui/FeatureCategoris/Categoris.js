import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Categoris = ({ categori }) => {
  const { images, name, _id } = categori;
  const router = useRouter()
 
  return (
    <div>
      {/* <Link href={`/categori/${_id}`}> */}
        <div onClick={() => router.push(`/categori/${_id}`)} >
          <img className="w-20 h-20 mx-auto" src={images} alt="" />
          <p className="text-center mt-2 rubik  text-[#6B7280] text-lg">{name}</p>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Categoris;
