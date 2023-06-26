import JohnDoe from "../assets/JohnDoe.png";
import { AiFillStar } from "react-icons/ai";
const StudentReviewsCard = (customBorderBottom) => {
  return (
    <div
      className={`reviewCard w-[75%] py-[15px] px-[20px] ${customBorderBottom.customBorderBottom}`}
    >
      <img src={JohnDoe} alt="profile image" className="w-[40px] h-[40px]" />
      <div>
        <h1 className="text-sm font-semibold pt-2">John Doe</h1>
        <p className="text-xs flex pt-2">
          <p className="font-semibold">Data Analyst,</p>DataSpace Security
        </p>
        <div className="flex gap-2 pt-2">
          <AiFillStar className="fill-[#FFB701]" />
          <AiFillStar className="fill-[#FFB701]" />
          <AiFillStar className="fill-[#FFB701]" />
          <AiFillStar className="fill-[#FFB701]" />
          <AiFillStar className="fill-[#FFB701]" />
        </div>
      </div>
      <div className="pt-2">
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren.
        </p>
      </div>
    </div>
  );
};

export default StudentReviewsCard;
