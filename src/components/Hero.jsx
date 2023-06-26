import Trophy from "../assets/Trophy.svg";
import iafLogo from "../assets/iafLogo.png";
import ISACA from "../assets/ISACA.png";
import msme from "../assets/msme.png";
import startupIndia from "../assets/startup-india.png";
import bsi from "../assets/bsi.png";

const Hero = () => {
  return (
    <div className="herobackground md:w-full md:h-[630px] h-[100%] flex md:flex-row flex-col md:items-start items-center justify-center">
      <div className="flex flex-col md:items-start items-center pl-[50px] md:pt-[50px] pt-[15px] md:gap-[40px] gap-[2px]">
        <div>
          <h1 className="text-[#fff] md:text-5xl text-lg opacity-1 md:leading-[70px] pb-[10px]">
            Unlock the secrets of <br /> CYBERSECURITY MASTER
          </h1>
        </div>
        <div className="md:w-[750px] w-[400px] pb-[10px]">
          <p className="text-[#fff] md:text-sm text-xs opacity-0.5 text-normal md:leading-[30px] leading-[20px] md:text-left text-center w-full">
            Cybersecurity is a booming field in India with increasing demand for
            experts. According to NASSCOM, the Indian cybersecurity market is
            expected to grow at a CAGR of 11.9% till 2025. The average salary
            for a cybersecurity professional in India is around 7-15 Lakhs per
            year, with top salaries reaching up to 40 Lakhs or more. A career in
            cybersecurity in India offers growth potential, challenging work,
            and a positive impact on society.
          </p>
        </div>
        <div>
          <div className=" md:flex gap-4 items-center justify-start pb-[10px] hidden">
            <img src={Trophy} alt="Trophy" className="h-[20px] w-[20px]" />

            <h1 className="text-[#fff] text-lg opacity-0.5 text-normal">
              Awards Winning Brands
            </h1>
          </div>
          <hr className="md:w-[700px] w-full" />
        </div>
        <div className="md:flex gap-4 items-center justify-center hidden">
          <p className="text-[#fff] text-2xl text-bold">EC-Council</p>
          <img src={iafLogo} alt="iafLogo" className="h-[60px] w-[60px]" />
          <img src={ISACA} alt="ISACA" className="h-[60px] w-[120px]" />
          <img src={msme} alt="msme" className="h-[60px] w-[120px]" />
          <img
            src={startupIndia}
            alt="startupIndia"
            className="h-[60px] w-[120px]"
          />
          <img src={bsi} alt="bsi" className="h-[60px] w-[120px]" />
        </div>
      </div>

      <div className="md:flex md:flex-col items-center justify-center bg-[#fff] md:h-[400px] h-full md:w-[350px] w-[300px] md:ml-[90px] md:mt-[70px] mb-[80px] rounded  md:p-[50px] p-[20px] boxshadowform">
        <div className="flex w-full items-center justify-start gap-2">
          <div className="yelloLine md:h-[20px] h-[15px] md:w-[3px] w-[3px] bg-[#FFB701]"></div>
          <p className="text-sm md:text-xl md:text-left">Get In Touch</p>
        </div>
        <div>
          <form action="">
            <div className="flex flex-col border-none gap-4 pt-[10px]">
              <input type="text" placeholder="Name" className="border-b-2" />
              <input
                type="text"
                placeholder="Email Id"
                className="border-b-2"
              />
              <input
                type="number"
                placeholder="Number"
                className="border-b-2 "
              />
            </div>
            <p className=" pt-[10px]">Inquiry for:</p>
            <div className="pt-[8px] flex gap-2">
              <label className="flex gap-2 items-center justify-center   cursor-pointer text-xs">
                <input type="radio" name="radio" value="Myself" />
                Myself
              </label>

              <label className="flex gap-2 items-center justify-center  cursor-pointer text-xs">
                <input type="radio" name="radio" value="Family" />
                Family
              </label>

              <label className="flex gap-2 items-center justify-center cursor-pointer text-xs">
                <input type="radio" name="radio" value="My Company" />
                My Company
              </label>
            </div>

            <div className="pt-[10px] pb-[10px] flex items-center justify-center">
              <p className="text-sm">
                {" "}
                <input type="checkbox" /> By providing your contact details, you
                agree to our{" "}
                <a href="" className="text-[#085AFB]">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button className="w-full bg-[#0D6EFD] p-2 text-[#fff] rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
