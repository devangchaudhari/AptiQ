import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Quiz = () => {
  return (
    <div>
      <div className="relative bg-[url('/background.jpg')] bg-cover bg-center h-screen/2 flex items-center justify-center">
        <Navbar /><br /><br /><br />
      </div>

      <br /> <br /> <br />

      <div className="flex flex-wrap justify-center">
        <Course
          imageUrl="https://via.placeholder.com/150"
          title="C Language"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=general"
        />
        <Course
          imageUrl="https://via.placeholder.com/150"
          title="Blood Relation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=blood"
        />
        <Course
          imageUrl="https://via.placeholder.com/150"
          title="Logical"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=logical"
        />
        <Course
          imageUrl="https://via.placeholder.com/150"
          title="C++ Language"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=logical"
        />
        <Course
          imageUrl="https://via.placeholder.com/150"
          title="English Comprehension"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=english"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;


