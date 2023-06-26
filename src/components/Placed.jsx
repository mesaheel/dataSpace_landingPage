import PlacedCard from "./PlacedCard";
import useMediaQuery from "../hooks/useMediaQuery";
import Slider from "react-slick";

const Placed = () => {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px)");

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: isAboveMediumScreens ? 1 : 3,
    slidesToScroll: isAboveMediumScreens ? 1 : 3,
    arrows: false,
  };

  return (
    <div className="bg-[#F8F9FB] pb-[70px]">
      <h1 className=" md:text-4xl text-2xl pt-[40px] md:pl-[50px] pb-[25px] md:text-left text-center">
        Recently Placed
      </h1>
      <div className="pl-[60px]">
        <Slider {...settings}>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
          <div>
            <PlacedCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Placed;
