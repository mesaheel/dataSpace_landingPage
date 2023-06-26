import profileAdd from "../assets/profile-add.png";
import clock from "../assets/clock.png";
import briefcase from "../assets/briefcase.png";
import award from "../assets/award.png";
import tcs from "../assets/tcs.png";
import Cognizant from "../assets/Cognizant.png";
import Infosys from "../assets/Infosys.png";
import Deloitte from "../assets/Deloitte.png";
import IBM from "../assets/IBM.png";
import Accenture from "../assets/Accenture.png";

const CourseCard = () => {
  return (
    <div className="coursesBackgroundContainer bg-[#F8F9FB] w-[90%] flex flex-col items-center pb-[50px] mt-6">
      <h1 className="text-center pt-[40px] md:text-4xl text-2xl">
        Our Cyber Security Courses
      </h1>
      <div className="flex w-[95%] md:flex-row flex-col md:items-start items-center md:justify-between justify-center">
        <div className="md:w-[40%] flex flex-col justify-center w-full pt-[20px] md:items-start items-center">
          <div className="flex items-center md:justify-start justify-center gap-2 cursor-pointer w-full">
            <div className="blueLinecertificate w-[6px] h-[25px]"></div>
            <p className="md:py-4 py-2 frow md:text-lg text-sm">
              Cybersecurity Essentials Program
            </p>
          </div>
          <p className="md:h-[35px] h-[10px] md:pb-[50px] pb-[25px] md:pt-[15px] pt-[10px] md:text-lg text-sm cursor-pointer">
            Prerequisite Cybersecurity
          </p>
          <p className="md:h-[35px] h-[10px] md:pb-[50px] pb-[25px] md:text-lg text-sm cursor-pointer">
            Pen Testing for Security Engineer
          </p>
          <p className="md:h-[35px] h-[10px] md:pb-[50px] pb-[25px]  md:text-lg text-sm cursor-pointer">
            Advance Pen Testing
          </p>
          <p className="md:h-[35px] h-[10px] md:text-lg text-sm cursor-pointer">
            Job Guaranteed Program
          </p>
        </div>
        <div className="md:w-[60%] w-full rightcontainer mt-[20px]">
          <h1 className="text-center md:text-2xl text-lg pt-[30px]">
            Cybersecurity Essentials Program
          </h1>
          <div className="text-center px-10">
            <div>
              <div className="flex items-start justify-start w-full gap-4 h-[100px] pt-6">
                <div className="w-[50%] flex flex-col items-start justify-center">
                  <div className="flex gap-2 md:pb-4 pb-1">
                    <img
                      src={profileAdd}
                      alt="Profile"
                      className="md:h-[20px] h-[15px] md:w-[20px] w-[15px]"
                    />
                    <h2 className="text-sm">Who can join?</h2>
                  </div>
                  <p className="text-start text-xs">
                    Anyone with an interest in cyber security and a basic
                    understanding of computer systems can join.
                  </p>
                </div>
                <div className="w-[50%] flex flex-col items-start justify-center">
                  <div className="flex gap-2 pb-4">
                    <img
                      src={clock}
                      alt="clock"
                      className="md:h-[20px] h-[15px] md:w-[20px] w-[15px]"
                    />
                    <h2 className="md:text-sm text-xs">Course duration</h2>
                  </div>
                  <p className="text-[#085AFB] text-xs">5 Months</p>
                </div>
              </div>
              <div className="flex items-start justify-start w-full gap-4 pt-6">
                <div className="w-[50%]">
                  <div className="flex gap-2 pb-4">
                    <img
                      src={briefcase}
                      alt=""
                      className="md:h-[20px] h-[15px] md:w-[20px] w-[15px]"
                    />
                    <h2 className="md:text-sm text-xs">
                      Opportunities (Job profiles)
                    </h2>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <input
                      type="text"
                      placeholder="Cyber Operations Analyst"
                      className="bg-[#FFFFFF] w-full border-[#B9B9B9] border-[1px]"
                    />
                    <p className="text-[#B9B9B9] text-xs py-2">
                      Average Salary
                    </p>
                    <h2 className="md:text-sm text-xs pb-2">
                      ₹6.8L - ₹23.34L PA
                    </h2>
                    <input
                      type="text"
                      placeholder="SOC Analyst"
                      className=" bg-[#FFFFFF] w-full mb-3 border-[#B9B9B9] border-[1px]"
                    />
                    <input
                      type="text"
                      placeholder="Security Engineer"
                      className="bg-[#FFFFFF] w-full border-[#B9B9B9] border-[1px]"
                    />
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="flex gap-2 pb-4">
                    <img
                      src={award}
                      alt="award"
                      className="md:h-[20px] h-[15px] md:w-[20px] w-[15px]"
                    />
                    <h2 className="md:text-sm text-xs">Hiring companies</h2>
                  </div>
                  <div className="md:w-[150px] w-[100px] md:h-[150px] h-[100px] pr-[20px]">
                    <div className="flex gap-2 py-2">
                      <img src={tcs} alt="tcs" />
                      <img src={Cognizant} alt="Cognizant" />
                    </div>
                    <div className="flex gap-2">
                      <img src={Infosys} alt="Infosys" />
                      <img src={Deloitte} alt="Deloitte" />
                    </div>
                    <div className="flex gap-2 py-2">
                      <img src={IBM} alt="IBM" />
                      <img src={Accenture} alt="Accenture" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[50px] ">
              <button className="courseButton w-[300px] h-[40px] text-white">
                View Full Course Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
