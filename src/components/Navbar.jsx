import logo from "../assets/logo.png";
import Book from "../assets/Book.svg";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className="w-full flex items-center justify-between h-[100px]">
        <div className="flex items-center justify-center md:gap-5 gap-5 pl-[50px]">
          <div className="flex md:items-center md:justify-center cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="md:w-[400px] md:h-[100px] h-[50px] w-[200px]"
            />
          </div>
          <div className="bg-[#0D6EFD] md:h-[50px] md:w-[200px] h-[30px] w-[150px] rounded cursor-pointer">
            <button className="w-full text-[#FFFFFF] flex items-center justify-center gap-2 h-full">
              <img
                src={Book}
                alt="book"
                className="md:h-[25px] md:w-[25px] h-[15px] w-[15px]"
              />
              <p className="md:text-lg text-sm">All Courses</p>
            </button>
          </div>
        </div>

        {isAboveMediumScreens ? (
          <div className="md:flex hidden items-center justify-center gap-5 pr-[50px] text-[#1A1A1A] cursor-pointer">
            <p>Home</p>
            <p>About</p>
            <p>Live Schedule</p>
            <p>Blogs</p>
            <p>Events</p>
          </div>
        ) : (
          <div className="flex justify-end p-12">
            {!isMenuToggled ? (
              <button
                className="rounded-full  p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <GiHamburgerMenu className="h-6 w-6 text-black" />
              </button>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 top-0 z-40 h-full w-[150px] drop-shadow-xl bg-primary-100">
          <div className="flex justify-end p-12">
            <button
              className="rounded-full  p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <AiOutlineClose className="h-6 w-6 text-black" />
            </button>
          </div>

          <div className="py-[20px] flex items-center justify-center flex-col gap-6 text-md bg-[white] cursor-pointer">
            <p>Home</p>
            <p>About</p>
            <p>Live Schedule</p>
            <p>Blogs</p>
            <p>Events</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
