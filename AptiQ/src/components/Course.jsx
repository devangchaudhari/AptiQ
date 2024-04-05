import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Course = ({ imageUrl, title, description, buttonLink }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full max-w-xs max-h-xs" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        {/* Use Link component instead of onClick handler */}
        <Link to={buttonLink} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Course;
