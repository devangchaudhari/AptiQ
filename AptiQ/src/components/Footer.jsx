import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import{AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='bg-blue-50 py-8'>
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black text-center ">AptiQ</h1>
            <div className="flex items-center justify-center gap-2 mt-3">
              <a className=" cursor-pointer" href="https://github.com/devangchaudhari" target="blank">
                <FaGithub className=" text-black text-2xl" />
              </a>
              <a className=" cursor-pointer" href="#" target="blank">
                <FaFacebook className=" text-black text-2xl" />
              </a>
              <a className=" cursor-pointer" href="https://www.instagram.com/devang._.chaudhari/?igshid=YmMyMTA2M2Y%3D" target="blank">
                <AiFillInstagram className="text-3xl text-black" />
              </a>
              <a className=" cursor-pointer" href="https://www.linkedin.com/in/devangchaudhari" target="blank">
                <FaLinkedin className="text-black text-3xl" />
              </a>
            </div>
            <h1 className='text-black text-sm mt-5 font-semibold text-center'>©Devang,All rights reserved</h1>
        </div>

    </div>
  )
}

export default Footer;