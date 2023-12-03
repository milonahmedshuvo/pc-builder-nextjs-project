import Randomproduct from "./Randomproduct";


const Randomproducts = ({prodcuts}) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
       {
        prodcuts.map((product, i) => <Randomproduct key={product._id} product={product} ></Randomproduct> )
       }
    </div>
  )
}
export default Randomproducts;


