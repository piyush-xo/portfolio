import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full max-w-[1000px] px-4 grid grid-cols-2 gap-8">
          <div data-aos="fade-left" className="pb-8 sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="w-full max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4">
          <div data-aos="fade-left" className="sm:text-right text-3xl font-bold">
            <p>Nice to meet you. Please take a look around.</p>
          </div>
          <div data-aos="fade-right">
            <div>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
