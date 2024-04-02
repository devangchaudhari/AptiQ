
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';

const MCQ = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedback, setFeedback] = useState({});
  const [questions, setQuestions] = useState([]);
  const [submitted, setSubmitted] = useState([]);

  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`https://aptiq.vercel.app/questions/${category}`);
      setQuestions(response.data);
      setSubmitted(new Array(response.data.length).fill(false));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionIndex]: option
    });
  };

  const handleSubmit = async (questionIndex) => {
    try {
      const response = await axios.post('https://aptiq.vercel.app/api/submit-answers', {
        category: category,
        answers: Object.values(selectedOptions)
      });
      const feedbackData = response.data;
  
      // Construct the feedback message including correct answers
      const feedbackWithCorrectAnswers = feedbackData.map((feedbackMsg, index) => {
        const correctAnswer = questions[index].correctAnswer;
        return `${feedbackMsg} The correct answer is: ${correctAnswer}`;
      });
  
      setFeedback(feedbackWithCorrectAnswers);
      setSubmitted(prevSubmitted => prevSubmitted.map((value, index) => (index === questionIndex ? true : value)));
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <div className="relative bg-[url('/background.jpg')] bg-cover bg-center h-screen/2 flex items-center justify-center">
        <Navbar /><br /><br /><br />
      </div>

      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold mb-4">All Questions</h1> <br />
        {questions.map((question, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{question.question}</h2>
            <ul className="space-y-2 ">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex} className="flex items-center">
                  <input
                    type="checkbox"
                    id={option}
                    name={`question_${index}`}
                    value={option}
                    checked={selectedOptions[index] === option}
                    onChange={() => handleOptionSelect(index, option)}
                    className="mr-2  h-5 w-5  "
                  />
                  <label htmlFor={option} className="text-base">{option}</label>
                </li>
              ))}
            </ul>
            <button onClick={() => handleSubmit(index)} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 mt-2 rounded">
              Submit
            </button>
            {submitted[index] && (
             <p className={`text-xl mt-2 ${feedback[index].includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
             {feedback[index].includes('Correct') ? 'Your answer is correct!' : `Incorrect. The correct answer is: ${question.correctAnswer}`}
           </p>
           
            )}


          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MCQ;

