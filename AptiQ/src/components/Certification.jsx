import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// import Certify from './Certify';

const Certification = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:3001/questions');
      const data = await response.json();
      setQuestions(data);
      // Initialize answers state with empty values for each question
      const initialAnswers = {};
      data.forEach(question => {
        initialAnswers[question.id] = '';
      });
      setAnswers(initialAnswers);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach(question => {
      if (question.correctAnswer === answers[question.id]) {
        correctAnswers++;
      }
    });
    const percentage = (correctAnswers / questions.length) * 100;
    return percentage;
  };

  const handleAnswer = (selectedOption) => {
    // Update the answers state with the selected option
    const updatedAnswers = { ...answers };
    updatedAnswers[questions[currentQuestion].id] = selectedOption;
    setAnswers(updatedAnswers);

    // Move to the next question or show result if it's the last question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    // Reset the state to start the quiz again
    setCurrentQuestion(0);
    setShowResult(false);
    setCertificateGenerated(false);
    setAnswers({});
    fetchQuestions(); // Fetch new questions
  };

  return (
    <div>
      <div className="relative bg-[url('/background.jpg')] bg-cover bg-center h-screen/2 flex items-center justify-center">
        <Navbar />
        <br /><br /><br />
      </div>
      <div className="container mx-auto p-4">
        {showResult ? (
          <div className="text-center justify-center mt-8">
            <h2 className="text-4xl font-bold mb-4">Quiz Result</h2>
            <p>
              You scored {calculateScore()}%.
              {calculateScore() >= 80 && (
                <>
                  <span> <b>Congratulations,</b> you passed! </span> <br /> <br />
                  <a href="https://quiz.typeform.com/to/BdZ9s2Gt"><button
                    onClick={() => setCertificateGenerated(true)}
                    className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Generate Certificate
                  </button></a>
                </>
              )}
            </p>
            <button onClick={resetQuiz} className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Take Quiz Again
            </button>
          </div>
        ) : (
          <div className="text-center justify-center mt-8"><br /><br /><br /><br />
            <h1 className="text-4xl font-bold mb-4">Let's begin the Certification Test !</h1>
            <h1 className="text-1xl font-semibold mb-4">Test contain 10 MCQ & Atleast require 80% for Certificate<br />All the Best! </h1><br /><br />
            <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion]?.question}</h2>
            <div>
              {questions[currentQuestion]?.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)} className="mr-2 mb-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
};

export default Certification;

