import StFrancis from "../assets/StFrancis.png";
import Makaut from "../assets/Makaut.png";
import RICIS from "../assets/RICIS.png";
import OnlineManipal from "../assets/OnlineManipal.png";
import RIT from "../assets/RIT.png";
import TechnoIndia from "../assets/TechnoIndia.png";
import GMIT from "../assets/GMIT.png";

const Partners = () => {
  return (
    <div className="md:mt-[5px] mt-[10px]">
      <div className="md:p-[35px] p-[10px] flex flex-col">
        <ul className="flex items-center justify-center md:gap-14 gap-2 cursor-pointer">
          <li className="font-semibold text-sm">
            Prestigious Academy Partners
          </li>
          <li className="md:text-sm text-xs">Recently Placed</li>
          <li className="md:text-sm text-xs">Courses</li>
          <li className="md:text-sm text-xs">Hiring Companies</li>
          <li className="md:text-sm text-xs">Benefits</li>
          <li className="md:text-sm text-xs">Certificates</li>
          <li className="md:text-sm text-xs">Student Review</li>
          <li className="md:text-sm text-xs">FAQs</li>
        </ul>
        <div className="blueline md:h-[5px] h-[5px] md:w-[220px] w-[70px] md:ml-[115px] md:mt-[8px]"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="md:text-4xl text-2xl pb-[10px]">
            Prestigious Academy Partners
          </h1>
        </div>
        <div className="w-full flex items-center justify-between md:px-[50px] px-[10px] md:py-[50px] py-[10px]">
          <img
            src={StFrancis}
            alt="StFrancis"
            className="md:w-[110px] w-[50px] md:h-[40px] h-[20px]"
          />
          <img
            src={Makaut}
            alt="Makaut"
            className="md:w-[70px] w-[30px] md:h-[70px] h-[30px]"
          />
          <img
            src={RICIS}
            alt="RICIS"
            className="md:w-[70px] w-[30px] md:h-[60px] h-[25px]"
          />
          <img
            src={OnlineManipal}
            alt="OnlineManipal.png"
            className="md:w-[200px] w-[100px] md:h-[60px] h-[30px]"
          />
          <img
            src={RIT}
            alt="RIT"
            className="md:w-[110px] w-[50px] md:h-[40px] h-[20px]"
          />
          <img
            src={TechnoIndia}
            alt="TechnoIndia"
            className="md:w-[70px] w-[30px] md:h-[60px] h-[30px]"
          />
          <img
            src={GMIT}
            alt="GMIT"
            className="md:w-[110px] w-[50px] md:h-[40px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
