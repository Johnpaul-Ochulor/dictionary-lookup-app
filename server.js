
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

dictionary_app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


