import DataSpace from "../assets/DataSpace.png";
const Certificate = () => {
  return (
    <div className="certificateBackground h-[100%] w-[100%]">
      <div className="md:pl-[90px] md:pt-[50px] pt-[30px] md:pb-[30px] pb-[2px] text-center md:text-left">
        <h2 className="md:text-4xl text-2xl">Certificates</h2>
        <h4 className="md:2xl text-lg py-3">Get certified by top institutes</h4>
      </div>
      <div className="w-full flex  items-center justify-center mb-[50px]">
        <div className="flex w-[80%] md:flex-row flex-col md:items-start items-center justify-between">
          <div className="md:w-[30%] w-full md:text-left text-center">
            <div className="flex items-center md:justify-start justify-center gap-2 cursor-pointer">
              <div className="blueLinecertificate w-[6px] h-[25px]"></div>
              <p className="py-4 bg-[#ffff] md:text-xl text-md">
                DataSpace Academy Certificate
              </p>
            </div>
            <p className="md:py-4 py-1 bg-[#ffff] cursor-pointer md:text-xl text-md">
              International Certificates
            </p>
          </div>
          <div className="md:w-[70%] w-full flex md:justify-end justify-center md:pr-[30px]">
            <img
              src={DataSpace}
              alt="DataSpace"
              className="md:w-[80%] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
