import React from 'react';
import Navbar from './Navbar';
import Course from './Course';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <div className="relative bg-[url('/background.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Aptitude Quiz</h1><br />
            <p className="text-white text-lg md:text-2xl mb-4 ">One Stop Solution for your Aptitude Quiz<br /> Round that boost your interview preparation<br /> and helps to get a job</p><br />
            <Link to="/Quiz"><button className="bg-pink-700 hover:bg-pink-900 text-white text-lg md:text-3xl font-bold py-3 px-4 rounded-full"> Start Quiz </button></Link>
          </div>
        </div>
      </div> 

      <div className="relative bg-#ebfff4 bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="text-center">
          <br /><h1 className="text-black text-3xl md:text-5xl font-bold mb-4 pt-5">Interview PYQ</h1><br />

          <div className="flex flex-wrap justify-center">
            <Course
              imageUrl="infosys.jpg"
              title="Infosys"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=infosys"
            />
            <Course
              imageUrl="TCS.jpeg"
              title="TCS"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=tcs"
            />
            <Course
              imageUrl="accenture.jpg"
              title="Accenture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=accenture"
            />
            <Course
              imageUrl="PTC.jpg"
              title="PTC"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=ptc"
            />
            <Course
              imageUrl="Nutanix.jpeg"
              title="Nutanix"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=nutanix"
            />
            <Course
              imageUrl="accenture.jpg"
              title="Accenture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              Click="Explore"
              buttonLink="/MCQ?category=accenture"
            />
          </div>
        </div>
      </div>
  
      <Footer className="mt-8" />
    </div>
  );
};

export default Hero;

