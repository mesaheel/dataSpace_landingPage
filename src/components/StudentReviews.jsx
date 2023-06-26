import StudentReviewsCard from "./StudentReviewsCard";
import Slider from "react-slick";
import useMediaQuery from "../hooks/useMediaQuery";

const StudentReviews = () => {
  const isAboveMediumScreens = useMediaQuery("(max-width: 768px)");
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: isAboveMediumScreens ? 1 : 3,
    slidesToScroll: isAboveMediumScreens ? 1 : 3,
    arrows: false,
  };
  return (
    <div className="bg-[#F8F9FB]">
      <div className="md:pl-[90px] pt-[50px] pb-[30px] md:text-left text-center">
        <h2 className="md:text-4xl text-2xl">Student Reviews</h2>
      </div>
      <div className="flex items-center justify-between md:w-[30%] w-[80%] pl-[90px]">
        <h1 className="text-sm text-semibold">All Reviews</h1>
        <h1 className="text-xs text-[#121212]">Students</h1>
        <h1 className="text-xs text-[#121212]">Working professionals</h1>
      </div>
      <div className="ml-[15px]">
        <div className="blueline ml-[75px] w-[75px] h-[5px]"></div>
      </div>
      <div>
        <div className="pl-[60px] pb-[50px] my-3">
          <Slider {...settings}>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderPurple"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderGreen"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderYellow"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderPurple"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderGreen"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderYellow"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderPurple"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderGreen"}
              />
            </div>
            <div>
              <StudentReviewsCard
                customBorderBottom={"reviewCardBorderYellow"}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StudentReviews;
