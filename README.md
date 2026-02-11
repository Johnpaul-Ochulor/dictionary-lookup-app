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
6. The frontend displays the definition on the page.

**Note:** The frontend never accesses `dictionary.json` directly; all communication goes through `server.js`.

## ▶️ How to Run the Project Locally

## 1. Clone the repository
git clone <repository-url>

## 2. Navigate into the project folder
cd dictionary_lookup_app

## 3. Install dependencies
npm install

## 4. Start the server in your terminal
node server.js

## Open the app in your browser
http://localhost:3000


## ⚠️ Important Notes

- Do not open index.html directly in the browser.

- The application must be accessed through the Express server.

- node_modules is ignored using .gitignore.


## Changes are pushed to GitHub and merged via Pull Requests

## Git is used to manage versions and avoid conflicts.