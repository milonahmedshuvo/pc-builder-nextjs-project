import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navber = () => {
  return (
    <div className=" bg-[#FFFFFF] shadow-sm flex  justify-between items-center py-4">
      <div>
        <Image
          src="https://www.ryanscomputers.com/assets/images/ryans-logo.svg"
          width={100}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="flex justify-between">
        {/* dropdown manu  */}
        <div className="right-manu  relative mx-6">
          <button type="button" className="manu-btn">
            catagory
          </button>
          <div className="drowpdown py-4 border-t-4 border-green-400 shadow-xl absolute hidden min-w-[179px] z-[1px]">
            <a href="" className="block">
              CPU / Processor
            </a>
            <a href="" className="block">
              Motherboard
            </a>
            <a href="" className="block">
              RAM
            </a>
            <a href="" className="block">
              Power Supply Unit
            </a>
          </div>
        </div>

        {/* button  */}
        <Link href="/pc-builder/PCBuilder" >
        <div className="mx-8 ">
          <button className="bg-[#72BF44] text-white font-semibold py-1 px-6 rounded">
            PC Builder
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
