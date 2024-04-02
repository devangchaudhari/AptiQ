// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/generate-certificate', async (req, res) => {
  try {
    
    const { certificateData } = req.body;

    // Make sure certificateData is stringified if it's an object
    const response = await axios.post(
      'https://api.certifier.io/v1/certificates',
      JSON.stringify(certificateData),
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer cfp_tEE4UgLaOTA5fC2jF1JSIVdniN2sxdhFlOrp`
        }
      }
    );

    // Return the response from Certifier.io API
    res.json(response.data);
  } catch (error) {
    // Handle error
    console.error('Error generating certificate:', error);
    res.status(500).json({ error: 'An error occurred while generating the certificate.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
