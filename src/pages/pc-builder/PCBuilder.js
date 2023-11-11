import RootLayout from "@/components/layout/RootLayout";

const PCBuilderPage = ({ categoriImage }) => {
  console.log(categoriImage);
  // const {images, name, products} = categoriImage;

  return (
    <div className=" w-full md:w-10/12 lg:w-9/12 mx-auto my-24  ">
      <div className=" flex justify-between items-center pb-7 ">
        <div>
          <h3 className="text-lg">
            PC Builder - Build Your Own Computer - Star Tech
          </h3>
          <div className="flex justify-start items-center">
            <input type="checkbox" name="" id="" className="mr-2" />
            <p>Hide Unconfigured Components</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="border-dotted border-2 border-red-400 py-3 rounded mr-3 px-14 flex flex-col justify-center items-center">
            <p>0৳</p>
            <p className="text-[#808996] font-serif "> Estimated Wattage </p>
          </div>

          <div className="bg-[#72BF44] text-white rounded font-medium py-3 px-14 flex flex-col justify-center items-center">
            <p>0৳</p>
            <p>0 Items</p>
          </div>
        </div>
      </div>

      {/* start categori dainamic data show  */}
      <div className="border-t-2">
        {categoriImage.map((categori) => (
          <div key={categori._id} className="flex justify-between items-center">
            <div className="flex my-10 p-4">
              <img className="w-[100px]" src={categori.images} alt="" />
              <p className="mt-2 ml-8 text-lg">{categori.name}</p>
            </div>

            <div>
              <button className=" hover:bg-[#72BF44] border border-[#72BF44] px-8 py-4 text-[#72BF44] font-semibold rounded hover:text-white">
                {" "}
                Select{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout> {page} </RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/categoris");
  const data = await res.json();

  return {
    props: {
      categoriImage: data,
    },
  };
};
