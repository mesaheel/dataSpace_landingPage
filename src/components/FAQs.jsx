import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const data = [
  {
    heading: "Lorem ipsum dolor sit amet, consetetur sadipscing ?",
    detail:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    heading: "Lorem ipsum dolor sit amet, consetetur sadipscing ?",
    detail:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    heading: "Lorem ipsum dolor sit amet, consetetur sadipscing ?",
    detail:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  {
    heading: "Lorem ipsum dolor sit amet, consetetur sadipscing ?",
    detail:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(0);
    }
    setSelected(i);
  };
  return (
    <div className="bg-[#F2FBFF] md:pb-[30px] pb-[10px]">
      <div className="md:pl-[90px] md:pt-[50px] pt-[25px] md:pb-[30px] pb-[10px] text-center md:text-left">
        <h2 className="md:text-4xl text-2xl">FAQs</h2>
        <h4 className="md:text-2xl text-xl py-3">
          Have some doubts? Let's Clear
        </h4>
      </div>
      <div className="h-auto w-auto md:pl-[70px] text-left flex items-center md:justify-start justify-center">
        <div className="md:w-[500px] w-[350px]">
          {data.map((item, i) => (
            <div className="mb-[5px] p-[10px 20px] pb-[50px]" key={i}>
              <div
                className="flex items-center justify-between gap-2 cursor-pointer pb-[10px]"
                onClick={() => toggle(i)}
              >
                <h2 className="md:text-md text-sm text-left">{item.heading}</h2>
                <span>
                  {selected === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </div>
              <div
                className={`${
                  selected === i ? "content show" : "content"
                } text-xs mb-1 border-b-2
                `}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
