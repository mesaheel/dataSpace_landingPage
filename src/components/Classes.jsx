import ClassesCard from "./ClassesCard";
import Slider from "react-slick";
import Verify from "../assets/Verify.png";
import useMediaQuery from "../hooks/useMediaQuery";

const Classes = () => {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px)");
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: isAboveMediumScreens ? 1 : 2,
    slidesToScroll: isAboveMediumScreens ? 1 : 2,
    arrows: false,
  };
  return (
    <div className="mb-[50px]">
      <div className="md:pl-[90px] pt-[50px] pb-[30px] md:text-left text-center">
        <h4 className="md:text-2xl text-xl py-3">Benefits of choosing</h4>
        <h2 className="md:text-4xl text-2xl">Industry Experts</h2>
      </div>

      <div className="pl-[60px] pb-[50px] my-3">
        <Slider {...settings}>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderGreen"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderYellow"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderGreen"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderYellow"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderGreen"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderYellow"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderGreen"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderYellow"} />
          </div>
          <div>
            <ClassesCard customBorderBottom={"classesCardBottomBorderGreen"} />
          </div>
        </Slider>
      </div>

      <div className="pl-[90px] pb-[30px]">
        <h4 className="md:text-2xl text-xl py-3">Benefits of choosing</h4>
        <h2 className="md:text-4xl text-2xl">DataSpace Academy</h2>
        <div className="flex w-full items-center justify-between pr-10 pt-5">
          <div>
            <div className="flex md:gap-3 gap-2 py-4">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">
                Learn from Industry Experts with Years of Expertise in the
                related field.
              </p>
            </div>
            <div className="flex md:gap-3 gap-2 py-3">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">
                Placement Support for successful completion of courses and
                certification.
              </p>
            </div>
            <div className="flex md:gap-3 gap-2 py-3">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">Advanced Course Curriculum</p>
            </div>
          </div>
          <div>
            <div className="flex md:gap-3 gap-2 py-3">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">
                Practice on Real Time Projects which can be showcased to future
                recruiters.
              </p>
            </div>
            <div className="flex md:gap-3 gap-2 py-3">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">
                100% practical and lab-based classes (available online &
                offline).
              </p>
            </div>
            <div className="flex md:gap-3 gap-2 py-3">
              <img src={Verify} alt="Verify" className="w-[20px] h-[20px]" />
              <p className="md:text-sm text-xs">
                Cyber Security & Ethical Hacking Professionals’ demand increase
                by 30% by the start of 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
