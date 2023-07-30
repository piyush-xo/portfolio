import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto h-full px-4 flex flex-col justify-center">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Piyush Mehta
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 px-4 py-2 flex items-center justify-between hover:bg-pink-600 hover:border-pink-600 duration-[400ms] group">
              View Work{" "}
              <HiArrowRight className="ml-3 duration-[300ms] group-hover:rotate-90" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
