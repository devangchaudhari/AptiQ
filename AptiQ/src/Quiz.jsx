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
          imageUrl="c-language.png"
          title="C Language"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=c_lang"
        />
        <Course
          imageUrl="Blood.jpg"
          title="Blood Relation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=blood"
        />
        <Course
          imageUrl="java.png"
          title="Java"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=java_lang"
        />
        <Course
          imageUrl="c++_lang.png"
          title="C++ Language"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=cpp_lang"
        />
        <Course
          imageUrl="verbal.png"
          title="Verbal"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=verbal"
        />
        <Course
          imageUrl="logical.png"
          title="Logical"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonLink="/MCQ?category=logical"
        />
        <Course
          imageUrl="english.jpg"
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


