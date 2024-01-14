const checkout = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 px-1  md:px-20  my-24">
      <div className="border border-red-400">
        <p>products</p>
      </div>





      <div className="border border-green-300">
        <p className="font-medium" >Shipping information</p>

        <form action="">
          <div className="mt-1">
            <p>Name</p>
            <input type="text" name="name" className="border rounded w-full md:w-2/3 md:py-1 " />
          </div>

          <p className="mt-8">Shipping address</p>          
            <input type="email" name="name" placeholder="Email" className="border rounded w-full md:w-2/3 md:py-1 " />          
            <input type="text" name="name" placeholder="Address" className="border rounded w-full md:w-2/3 md:py-1 " />


            <p className="mt-4">Payment datails</p>
            <p className="text-xs mt-2">Cart info</p>
            <input type="text" name="name" placeholder="986 456767 334" className="border rounded w-full md:w-2/3 md:py-1 " />          
            <input type="date" name="name" placeholder="Email" className="border rounded w-full md:w-2/3 md:py-1 " />          
            
          


        </form>
      </div>
    </div>
  );
};

export default checkout;
