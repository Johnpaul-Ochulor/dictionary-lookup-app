import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Create an Express application instance
const dictionary_app = express();

// Define the port the server will run on
const PORT = 3000;

// Since ES modules do not support __dirname and __filename by default,
// we recreate them using fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the absolute path to the dictionary.json file
const dictionaryPath = path.join(__dirname, "dictionary.json");

// Read and parse the JSON file once when the server starts
// This loads all dictionary entries into memory for faster access
const dictionary = JSON.parse(fs.readFileSync(dictionaryPath, "utf-8"));

// Serve static files (HTML, CSS, JS, images) from the "public" folder
dictionary_app.use(express.static("public"))


// This endpoint searches for a specific word in the dictionary.
// It expects a query parameter in the URL:

dictionary_app.get("/define", (req, res) => {

   // Extract the word from the query parameter
  const word = req.query.word;

  // Validate input: If no word is provided, return 400 (Bad Request)
  if (!word) {
    return res.status(400).json({
      error: "Please provide a word"
    });
  }

 // Convert the word to lowercase for case-insensitive search
  const definition = dictionary[word.toLowerCase()];

// If the word does not exist in the dictionary, return 404 (Not Found)
  if (!definition) {
    return res.status(404).json({
      error: "Not Found"
    });
  }

  // If the word does not exist in the dictionary, return 404 (Not Found)
  res.json({
    word: word.toUpperCase(),
    definition
  });
});




// This endpoint returns all dictionary entries.
//  It is used by allwords.html to display the complete list.

dictionary_app.get('/words', (req, res) => {
  try {

    // Send all dictionary data along with metadata
    res.json({
      success: true,
      total: Object.keys(dictionary).length,
      words: dictionary
    });
  } catch (error) {

    // Handle unexpected server errors
    res.json({
      success: false,
      error: error.message
    });
  }
});


// Start the server and listen for incoming requests
dictionary_app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


