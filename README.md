# PROJECT TITLE 
- Dictionary-Look-Up-App Project

## PROJECT DESCRIPTION
The Dictionary Lookup App is a simple full-stack web application that allows users to search for words and view their meanings.  
It uses a Node.js and Express backend to serve word definitions from a JSON file, and a basic HTML/CSS/JavaScript frontend for user interaction.

##  PROJECT FEATURES
- Search for word and definitions
- View all dictionary entries on a separate page (allwords.html)
- Backend API built with Express (`server.js`)
- Frontend served directly by the backend
- Data stored in a JSON file (`dictionary.json`)
- Git and GitHub used for team collaboration

## TECHONOLOGY USED 
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Git and Github

- Note: JSON is used as a data format to store dictionary entries.

## PROJECT USAGE
1. Users can enter a word in the search box and click the **Search** button.
2. The app will display the definition of the word if it exists in `dictionary.json`.
3. If the word is not found, it will display a message indicating that the word is not in the dictionary.

## 📂 Project Structure

dictionary_lookup_app/
|
├── git folder
├── node_modules(not pushed to github)
└── public/
    ├── allwords.html
    ├── index.html
    ├── logo.jpeg
    ├── scripts.js
    └── style.css
├── .gitignore
├── dictionary.json
├── package-lock.json
├── package.json
├── README.md
└── server.js

## HOW THE APP WORKS
1. The frontend is served by the Express server (`server.js`).
2. When a user enters a word and clicks **Search**, the frontend sends an   HTTP GET request to the `/define` endpoint using `fetch()`.
3. The backend (`server.js`) receives the request at `/define`.
4. The backend reads `dictionary.json` using Node's `fs` module and searches for the requested word.
5. The backend sends back the definition as JSON.
6. The frontend displays the definition on the page.
7. When the user opens `allword.html` , `scripts.js` fetches all entries from the /words endpoint.

**Note:** The frontend never accesses `dictionary.json` directly; all communication goes through `server.js`.

## How to Run the Project Locally
 1. Clone the repository, git clone <repository-url>
2. Navigate into the project folder, cd dictionary_lookup_app
3. Install dependencies, npm install
4. Start the server in your terminal, node server.js

## Open the app in your browser
http://localhost:3000


## IMPORTANT NOTES 
- Do not open index.html directly in the browser.
- The application must be accessed through the Express server.
- node_modules is ignored using .gitignore.

## Changes are pushed to GitHub and merged via Pull Requests

## Git is used to manage versions and avoid conflicts.

## TEAM COLLABORATION 
- Johnpaul Ochulor / johnpaulochulor@gmail.com  (Team Lead – main branch)
Initialized the project, set up Git and GitHub repository, installed Express, managed merges, and reviewed contributions.

- Nwaeze Akumunicah / nwaezeakumunicah@gmail.com  (devsirmic branch)
Worked on the frontend: HTML, CSS, and scripts.js.

- Oweni Wenduka / oweniwenduka@gmail.com (nduka branch)
Worked on dictionary.json, added features to the frontend, and made major contributions to the project.

- Agbele Thanks / thanksagbele@gmail.com
Worked on scripts.js, backend testing, and major backend contributions.
 
- Ademola Fatimah / Ademolafatimah1410@gmail.com
Initial project coordinator, worked on backend development and testing.

- Ifeoma Love / ifeomalove333@gmail.com
Worked on project documentation.

- Ahmed Aminat / ahmedaminat322@gmail.com
Worked on project documentation.

- Akinleye Toluwanini / akinleyetoluwanini@gmail.com
Worked on project documentation.

- Stanley Mailbsg / stanleymailbsg@gmail.com
Worked on implementing endpoints and returning all dictionary entries.

## LICENSE 
This project is for educational purposes only.
