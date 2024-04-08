const express = require('express');
const cors = require("cors");
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

// Sample questions data for different categories
const questions = {
  general: require('./questions.json'),
  logical: require('./logical.json'),
  c_lang: require('./c_lang.json'),
  cpp_lang: require('./c++_lang.json'),
  java_lang: require('./java_lang.json'),
  verbal: require('./verbal.json'),
  blood: require('./bloodrelation.json'),
  english: require('./english.json'),


  tcs: require('./tcs.json'),
  infosys: require('./infosys.json'),
  accenture: require('./accenture.json'),
  ptc: require('./ptc.json'),
  nutanix: require('./nutanix.json'),
};

const certify = require('./certificate.json');

app.use(express.json());
app.use(cors({
  origin: ["https://apti-q.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(helmet());

//Endpoint for certificate question
app.get('/certify', (req, res) => {
  res.json(certify);
});

// Endpoint to get questions based on category
app.get('/questions/:category', (req, res) => {
  const { category } = req.params;
  const categoryQuestions = questions[category];
  if (categoryQuestions) {
    res.json(categoryQuestions);
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

  const feedback = categoryQuestions.map((question, index) => {
    return answers[index] === question.correctAnswer
      ? `Question ${index + 1}: Correct!`
      : `Question ${index + 1}: Incorrect. The correct answer is: ${question.correctAnswer}`;
  });

  res.json(feedback);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));















