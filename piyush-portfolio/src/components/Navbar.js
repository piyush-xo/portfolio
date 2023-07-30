import React, { useState } from "react";
import logo from "../assets/astro_logo.png";
import { FaBars, FaTimes, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleHamburgerClick = () => {
    setMenuToggle((prev) => !prev);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="z-10">
        <img src={logo} style={{ width: "50px" }} alt="by pngtree.com" />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        className="md:hidden z-10 cursor-pointer"
        onClick={handleHamburgerClick}
      >
        {!menuToggle ? (
          <FaBars size={22} className="hover:text-pink-600" />
        ) : (
          <FaTimes size={25} className="hover:text-pink-600" />
        )}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !menuToggle
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="text-3xl px-4 py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={handleHamburgerClick}
          >
            Home
          </Link>
        </li>
        <li className="text-3xl px-4 py-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleHamburgerClick}
          >
            About
          </Link>
        </li>
        <li className="text-3xl px-4 py-4">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleHamburgerClick}
          >
            Skills
          </Link>
        </li>
        <li className="text-3xl px-4 py-4">
          <Link
            to="work"
            smooth={true}
            duration={500}
            offset={-65}
            onClick={handleHamburgerClick}
          >
            Work
          </Link>
        </li>
        <li className="text-3xl px-4 py-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleHamburgerClick}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="lg:flex flex-col fixed top-[30%] left-0 hidden">
        <ul>
          <li className="w-[132px] ml-[-87px] hover:ml-0 duration-[400ms] bg-blue-600 p-1 px-2">
            <a
              href="https://www.linkedin.com/in/piyush-xo"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-[15px] "
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[132px] ml-[-87px] hover:ml-0 duration-[400ms] bg-[#068932] p-1 px-2">
            <a
              href="https://www.hackerrank.com/piyush"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-[15px] "
            >
              Hackerrank <FaHackerrank size={30} />
            </a>
          </li>
          <li className="w-[132px] ml-[-87px] hover:ml-0 duration-[400ms] bg-[#DB4437] p-1 px-2">
            <a
              href="mailto:kpiyush381@gmail.com"
              className="flex justify-between items-center text-[15px] "
            >
              Email <HiOutlineMail size={32} />
            </a>
          </li>
          <li className="w-[132px] ml-[-87px] hover:ml-0 duration-[400ms] bg-gray-600 p-1 px-2">
            <a
              href="https://drive.google.com/file/d/1ESJA3q00YihVHe-CCPf_B3h6hhxal1OA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center text-[15px] "
            >
              Resume <BsFillPersonLinesFill size={29} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
