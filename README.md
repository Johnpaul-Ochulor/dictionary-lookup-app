# Starting Dictionary-Look-Up-App Project

## 📖 Project Description
The Dictionary Lookup App is a simple full-stack web application that allows users to search for words and view their meanings.  
It uses a Node.js and Express backend to serve word definitions from a JSON file, and a basic HTML/CSS/JavaScript frontend for user interaction.

## 🚀 Features
- Search for word and definitions
- Backend API built with Express (`server.js`)
- Frontend served directly by the backend
- Data stored in a JSON file (`dictionary.json`)
- Git and GitHub used for team collaboration

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Git and Github

## 📁 Project Structure
dictionary_lookup_app/
│
├── git folder
├── node_modules(not pushed to github)
└── public/
    ├── index.html
    ├── style.css
    └── scripts.js
├── .gitignore
├── dictionary.json
├── package-lock.json
├── package.json
├── README.md
├── server.js



## ⚙️ How This Project Works
1. The frontend is served by the Express server (`server.js`).
2. When a user enters a word and clicks **Search**, the frontend sends an HTTP GET request to the `/define` endpoint using `fetch()`.
3. The backend (`server.js`) receives the request at `/define`.
4. The backend reads `dictionary.json` using Node's `fs` module and searches for the requested word.
5. The backend sends back the definition as JSON.
6. The frontend displays the definition on the page
