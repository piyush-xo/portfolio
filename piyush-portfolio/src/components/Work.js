import React from "react";
import workImg from "../assets/projects/workImg.jpeg";
import realEstateImg from "../assets/projects/realestate.jpg"

function Work() {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center p-4">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-pink-600 w-max">Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstateImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
              <div className="pt-8 text-center">
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Demo</button></a>
                <a href="/"><button className="text-center bg-white rounded-lg px-4 py-3 m-2 font-bold text-lg text-gray-700 hover:bg-gray-300 duration-200">Code</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
