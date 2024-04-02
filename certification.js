const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const questions = require('./certificate.json');

app.use(cors());
app.use(express.json());



// Route to get questions
app.get('/questions', (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

