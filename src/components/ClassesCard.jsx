import classesPfl from "../assets/classesPfl.png";
import { AiFillStar } from "react-icons/ai";
const ClassesCard = (customBorderBottom) => {
  return (
    <div
      className={`classesCard w-[75%] py-[25px] px-[25px] ${customBorderBottom.customBorderBottom}`}
    >
      <div className="flex gap-2">
        <img
          src={classesPfl}
          alt="profile image"
          className="w-[55px] h-[55px]"
        />
        <div>
          <h1 className="text-md">Soumya Maity</h1>
          <p className="text-sm">
            Lead Network Analyst & Cloud Support Engineer
          </p>
          <div className="flex">
            <AiFillStar className="fill-[#FFB701]" />
            <AiFillStar className="fill-[#FFB701]" />
            <AiFillStar className="fill-[#FFB701]" />
            <AiFillStar className="fill-[#FFB701]" />
            <AiFillStar className="fill-[#FFB701]" />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-xs">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam
          nonumy eirmod tempor invidunt ut labore et doloremagna aliquyam erat,
          sed diam voluptua. Lorem ipsum dolorsit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et
          doloremagna aliquyam erat, sed diam voluptua. Lorem ipsum dolorsit
          amet, consetetur sadipscing elitr, sed diam nonumyeirmod.
        </p>
      </div>
    </div>
  );
};

export default ClassesCard;
