import express from "express";

const app = express();
app.use(express.json());

// Sample dictionary
const dictionary = {
  apple: "A round fruit with red or green skin.",
  book: "A set of written or printed pages.",
  code: "Instructions written for computers.",
};

app.get("/dictionary", (req, res) => {
  const { word } = req.query;

  // Validate input
  if (!word) {
    return res.status(400).json({
      status: "error",
      message: "Please provide a word to look up.",
    });
  }

  if (typeof word !== "string" || word.trim() === "") {
    return res.status(400).json({
      status: "error",
      message: "The word must be a non-empty string.",
    });
  }

  const cleanedWord = word.toLowerCase().trim();

  // Check dictionary
  if (!dictionary[cleanedWord]) {
    return res.status(404).json({
      status: "error",
      message: `No definition found for the word '${cleanedWord}'.`,
    });
  }

  // Success response
  res.status(200).json({
    status: "success",
    word: cleanedWord,
    definition: dictionary[cleanedWord],
  });
});

// Server error fallback
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: "An unexpected error occurred. Please try again later.",
  });
});

app.listen(3000, () => {
  console.log("Dictionary app running on port 3000");
});
