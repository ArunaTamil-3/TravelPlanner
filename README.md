## Travel Planner

### Project setup

In the project directory, you can run:

npx create-react-app travel-planner

npm install


#### Mock Json server Setup

npm install json-server --save-dev 

Package.json :

 "devDependencies": {
    "json-server": "^0.17.3", 
  }

 Manually Insert in package

"scripts": {
    "json-server": "json-server --watch db.json --port 5000",
  },



### Run Both react and Mock Json Server 

npm install concurrently --save-dev


Package.json :

 "devDependencies": {
    "concurrently": "^8.2.0",
  }


npm run start-dev


### 'npm test

npm install --save-dev jest @testing-library/react @testing-library/jest-dom

Set up the Jest configuration package.json
 "jest": {
    "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
  }

run command :
npm test

### project deployed using GitHub Pages

- Install the gh-pages package as a dev dependency  by running the Command

 npm install gh-pages --save-dev

Package.json :

 "devDependencies": {
    "gh-pages": "^5.0.0",
    "
  }

Manually Insert in package

"homepage": "https://ArunaTamil-3.github.io/travelplanner",

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",

}

 Run the Deploiy Command:

 npm run deploy


Enable GitHub Pages in your repository settings:


** This command will create a branch named gh-pages in your GitHub repository and push the contents of the build folder to that branch.**


--> Go to your GitHub repository on the GitHub website.

--> Click on the "Settings" tab.

-->  Scroll down to the "GitHub Pages" section.

-->  In the "Source" dropdown, select the gh-pages branch, and click "Save."

### Git push  Commands

--> git init
--> git add .
--> git commit -m "Meassage first push all code"
--> git push origin master

  Gitignore file remove the node modules

### I have used it for complete project packages:

 "dependencies": {
    "@fortawesome/fontawesome-free": "^6.4.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.27.2",
    "bootstrap": "^5.3.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-loadable": "^5.5.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.4.0",
    "react-scripts": "5.0.1",
    "react-table": "^7.8.0",
    "react-validation": "^3.0.7",
    "redux": "^4.2.0",
    "redux-thunk": "^2.4.1",
    "validator": "^13.7.0"
  },
