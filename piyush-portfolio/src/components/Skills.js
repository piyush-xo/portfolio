import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import java from "../assets/java4.png";
import springboot from "../assets/springboot.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {

  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto px-4'>
            <div>
                <p data-aos="fade-left" className='text-4xl font-bold border-b-4 border-pink-600 w-max'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 sm:my-4 '>               
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={html} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>HTML</p></div> 
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={css} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>CSS</p></div>                 
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={javascript} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>JavaScript</p></div> 
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={java} className='w-[30px] sm:w-[60px] mx-auto'/> <p className='my-3'>Java</p></div>                               
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={react} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>React JS</p></div>                
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={tailwind} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>TailwindCSS</p></div>                
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={springboot} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>Spring Boot</p></div> 
                <div data-aos="flip-left" className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'><img alt="" src={git} className='w-[40px] sm:w-[80px] mx-auto'/> <p className='my-3'>Git</p></div>                
            </div>
        </div>
    </div> 
  )
}

export default Skills