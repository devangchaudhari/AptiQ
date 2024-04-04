const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Sample questions data for different categories
const questions = {
  general: require('./backend/questions.json'),
  logical: require('./backend/logical.json'),
  blood: require('./backend/bloodrelation.json'),
  tcs: require('./backend/tcs.json'),
  infosys: require('./backend/infosys.json'),
  accenture: require('./backend/accenture.json'),
  
  // Add more categories if needed
};
const certify = require('./backend/certificate.json');

app.use(bodyParser.json());
app.use(cors(
  {
    origin: ["https://aptiq.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));
app.use(express.json());

//Endpoint for certificate question
app.get('/certify', (req, res) => {
  res.json(certify);
});


// Endpoint to get questions based on category
app.get('/questions/:category', (req, res) => {
  const { category } = req.params;
  if (questions[category]) {
    res.json(questions[category]);
  } else {
    res.status(404).json({ error: "Category not found" });
  }
});

// Endpoint to submit answers
app.post('/api/submit-answers', (req, res) => {
  const { category, answers } = req.body;
  const categoryQuestions = questions[category];
  if (!categoryQuestions) {
    res.status(400).json({ error: "Category not specified or invalid" });
    return;
  }

  const feedback = [];

  categoryQuestions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      feedback.push(`Question ${index + 1}: Correct!`);
    } else {
      feedback.push(`Question ${index + 1}: Incorrect. The correct answer is: ${question.correctAnswer}`);
    }
  });

  res.json(feedback);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















