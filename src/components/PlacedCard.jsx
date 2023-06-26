import pflImg from "../assets/pflImg.png";

const PlacedCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#fff] placedCard w-[350px] h-[200px] gap-4">
      <div className="h-[70px] w-[100px] pt-6">
        <img src={pflImg} alt="pflImg" />
      </div>
      <div className="pt-6">
        <h1 className="text-[#085AFB] opacity-1">Vinita Jain</h1>
      </div>
      <div className="flex items-left justify-between gap-14 pb-6">
        <div>
          <p className="text-[#CBCBCB]">Placed as</p>
          <p className="text-[#121212]">Cloud Engineer</p>
        </div>
        <div className="">
          <p className="text-[#CBCBCB]">Company</p>
          <p className="text-[#121212]">DataSpace Security</p>
        </div>
      </div>
    </div>
  );
};

export default PlacedCard;
