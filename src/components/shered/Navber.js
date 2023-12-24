import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../image/Tech.png"

const Navber = () => {



  return (
    <div className=" bg-[#FFFFFF] shadow-sm flex  justify-between items-center py-4">
      <div>
        
        <Link href='/' > 
        <Image
          // src="https://www.ryanscomputers.com/assets/images/ryans-logo.svg"
          src={logo}
          width={200}
          height={400}
          alt="Picture of the author"
        />
        </Link>
      </div>

      <div className="flex justify-between items-center">
        {/* dropdown manu  */}


        
        <Link href='/Allproducts/Allproducts'>
            <button className="rubik hover:text-[#F26E21]">PRODUCTS</button>
        </Link>


 
        <div className="right-manu  relative mx-2 md:mx-6 hover:text-[#F26E21]">
          <button type="button" className="manu-btn hover:text-[#F26E21] rubik">
           CATEGORY
          </button>
          <div className="drowpdown z-10 py-4 border-t-4 border-[#F26E21] shadow-xl absolute hidden min-w-[179px] ">
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

        <Link href='/Cart/Cart'>
            <button className="rubik hover:text-[#F26E21]">CART</button>
        </Link>

        {/* button  */}
        <Link href="/pc-builder/PCBuilder" >
        <div className=" mx-1 md:ml-4 ">
          <button className="bg-[#F26E21] text-white font-normal md:font-semibold py-1 px-2 md:px-6 rounded">
            PC Builder
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navber;

