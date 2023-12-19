import React from "react";

const Offerproducts = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="hover:shadow-xl duration-150">
        <img
          src="https://gadgetandgear.com/img/home-new/offer-banner.9a202455.png"
          alt=""
        />
      </div>



      {/* two image defind  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">

         <div>
            <img className="hover:shadow-2xl" src="https://static.gadgetandgear.com/tmp/offers/20230926_1695703665_207752.png" alt="" />
         </div>

         <div>
            <img className="hover:shadow-2xl " src="https://static.gadgetandgear.com/tmp/offers/20230926_1695702719_415108.png" alt="" />
         </div>


      </div>
       
      



    </div>
  );
};

export default Offerproducts;
