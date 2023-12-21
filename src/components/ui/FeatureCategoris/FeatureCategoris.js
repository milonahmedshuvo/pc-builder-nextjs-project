import Categoris from "./Categoris";



const FeatureCategoris = ({categoris}) => {
  
   


  return (
    <div className='my-20'>
        <h4 className='text-center font-medium font-sans rubik text-xl'>Featured Category</h4>  
        <p className='text-center mt-1 rubik'>Get Your Desired Product from Featured Category!</p>


        <div className="grid grid-cols-6 gap-6 mt-12">
        {
          categoris.map((categori) => <Categoris categori={categori} key={categori._id} ></Categoris>)
        }
        </div>
    </div>
  )
}

export default FeatureCategoris;


 
