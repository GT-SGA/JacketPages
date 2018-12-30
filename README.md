# JacketPages

## Frontend
The frontend runs on React and Redux and can run independent of the backend. Requests to the backend are made to get info for the frontend
and Redux processeses the response from the backend api request and puts the response data into the Redux application store (_[more info on Redux](https://redux.js.org/basics/basic-tutorial))

### Project Structure:
src
-common: Contains custom components used by screens
-redux: Contains all redux actions and reducer files as well as the root reducer and application store
-screens: Contains application container screens

Redux and screens folders are divided by topic. Folder structure is mainly based on the toolbar tabs and where different functionalities 
fall in the tabs. 

## Backend
The backend runs on Node.js and Express. The backend is just an api that returns JSON to the frontend with each request.

### Routes Structure:
/auth
  GET /login - redirects to CAS login page
  GET /info - makes a request to the CAS auth system to get the current logged in user
  GET /logout - ends the current CAS session and logs the user out
/api
  /bills
    GET / - returns all bills in the bills table
    POST / - creates a new bill with the given info
    GET /:id - returns the bill with the given id from the bills table
    PATCH /:id - edits the bill with the given id
    DELETE /:id - deletes the bill with the given id
  /users
  /voting