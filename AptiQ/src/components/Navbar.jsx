import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10  text-white py-4 ">
        <header className="flex items-center justify-between h-full w-[90%] sm:w-[80%]  mx-auto">
          <Link
            className="text-2xl sm:text-3xl font-bold text-lg"
            to="/"
          >
            AptiQ
          </Link>
          <nav ref={navRef} className="flex items-center z-50">
            <Link
              className="mx-4   font-semibold text-lg cursor-pointer"
              to="/"
            >
              Home
            </Link>
             <Link
              className=" mx-4   font-semibold text-lg cursor-pointer"
              to="/Quiz"
              
            >
              Quiz
            </Link>
            

            <Link
              className=" mx-4   text-lg font-semibold cursor-pointer"
              to="/components/Certification"
              
            >
              Certification
            </Link>
            <Link
              className=" mx-4   text-lg font-semibold cursor-pointer"
              to="/ConnectUs"
             
            >
              Contact Us
            </Link>
            
            <button
              className="nav-btn nav-close-btn md:hidden"
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn md:hidden" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
};

export default Navbar;