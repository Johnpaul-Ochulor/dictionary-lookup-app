
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const dictionary_app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dictionaryPath = path.join(__dirname, "dictionary.json");
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf-8"));
    
dictionary_app.use(express.static("public"))

dictionary_app.get("/define", (req, res) => {
  const word = req.query.word;

  if (!word) {
    return res.status(400).json({
      error: "Please provide a word"
    });
  }

  const definition = dictionary[word.toLowerCase()];

  if (!definition) {
    return res.status(404).json({
      error: "Not Found"
    });
  }

  res.json({
    word: word.toLowerCase(),
    definition
  });
});







// ************** THIS SECTION IS ROLE 5. *****************************************************************************
// ************** CONTRIBUTED BY STANLEY AZUBUIKE (stanleymailbag@gmail.com) TO GROUP 2 OF OUR CAPSTONE PROJECT *******
// ************** THE /WORDS  API *************************************************************************************


// ************* THIS IS THE CORE CODE BASE NEEDED TO MAKE THIS API WORK, BUT IT LACKS ASTHETICS **********************
// dictionary_app.get("/words", (req, res) => {
//  const totalWords = Object.keys(dictionary).length;
//  res.status(200).json({
//    totalWords: totalWords,
//    words: dictionary
//  });
// })



// *************** HERE IS THE SAME FUNCTIONALITY, BUT FORMATTED TO LOOK PRESENTABLE AND MAINTAIN THE SAME LOOK AND FEEL WITH OUR INDEX PAGE ***

dictionary_app.get('/words', (req, res) => {
  const entries = Object.entries(dictionary);

  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tech Dictionary – Words</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #ffffff; /* clean white background */
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, Helvetica, sans-serif;
      }

      .card {
        background-color: #ffffff;
        width: 70%;
        max-width: 800px;
        border-radius: 14px;
        padding: 30px 40px;
        box-shadow: 0 8px 25px rgba(255, 99, 71, 0.15); /* soft tomato glow */
        border-top: 6px solid #ff4d4d; /* tomato accent line */
      }

      h1 {
        text-align: center;
        margin-bottom: 10px;
        color: #ff3b3b;
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        letter-spacing: 2px;
        font-size: 28px;
        text-transform: uppercase;
        text-shadow: 1px 1px 0px rgba(255, 77, 77, 0.15);
      }

      .count {
        text-align: center;
        margin-bottom: 25px;
        font-weight: bold;
        color: #555;
      }

      ol {
        padding-left: 20px;
      }

      li {
        background-color: #fff5f5;
        color: #333;
        margin-bottom: 15px;
        padding: 12px 16px;
        border-radius: 8px;
        line-height: 1.5;
        border-left: 5px solid #ff4d4d;   /* opening bracket */
        border-right: 5px solid #ff4d4d;  /* closing bracket */
      }

      li::marker {
        color: #000; /* numbering stays black */
        font-weight: bold;
      }

      li strong {
        color: #ff3b3b; /* tomato word highlight */
      }

      .back {
        display: block;
        margin-top: 25px;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        color: #ff3b3b;
      }

      .back:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>TECH DICTIONARY</h1>
      <div class="count">Available Words: ${entries.length}</div>

      <ol>
  `;

  entries.forEach(([word, meaning]) => {
    html += `<li><strong>${word}</strong>: ${meaning}</li>`;
  });

  html += `
      </ol>
      <a class="back" href="/">← Back to Search</a>
    </div>
  </body>
  </html>
  `;

  res.status(200).send(html);
});


// ********************* END OF ROLE 5 ***********************************************************



dictionary_app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


