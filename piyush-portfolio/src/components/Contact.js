import React from 'react';
import { HiHand } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className='h-full w-full max-w-[1000px] mx-auto flex flex-col justify-center p-4'>
        <form method="POST" action="https://getform.io/f/d2d0e0ce-ade1-4c41-831a-c6e1479474a6" className='flex flex-col w-full max-w-[600px]'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className='py-4'>Submit the form below or send me an <a href='mailto:kpiyush381@gmail.com' className= "hover:text-pink-600 border-b-2 hover:border-pink-600 duration-[200ms]">email</a>.</p>
          </div>
          <input className='bg-[#ccd6f6] p-2 text-gray-700' type='text' placeholder='Name' name='name'></input>
          <input className='bg-[#ccd6f6] p-2 my-2 text-gray-700' type='email' placeholder='Email' name='email'></input>
          <textarea className='bg-[#ccd6f6] p-2 text-gray-700' type='textarea' rows="7" placeholder='Message' name='message'></textarea>
          <button className='text-white border-2 px-4 py-2 my-3 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 duration-[400ms] group sm:w-[220px]'>
            Let's Collaborate <HiHand className='ml-3 group-hover:hidden ' size={25} /> <FaHandshake className='ml-3 hidden group-hover:flex' size={25} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;