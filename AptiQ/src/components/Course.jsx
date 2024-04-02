import React from 'react';

const Course = ({ imageUrl, title, description, Click, buttonLink }) => {
  const handleClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button onClick={handleClick} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          {Click}
        </button>
      </div>
    </div>
  );
};

export default Course;


