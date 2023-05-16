# Getting Started
Clone the repo and run `npm install` to install all dependencies

## Node and NPM versions
The project is created using the following versions of node.js and npm -
Node version: `18.13.0`
NPM version: `8.19.3`

It is highly recommended that you use the same versions of Node and NPM to avoid any dependency conflicts. 

Please use NVM to install the above versions of Node, if you want to keep multiple versions of node on your machine.

## Running the backend server

The project uses [json-server](https://github.com/typicode/json-server) to mock a backend. To run it, simply copy this command on a terminal window : `json-server --watch database/db.json --port 3001`
Some endpoints : `http://localhost:3001/songs` and `http://localhost:3001/artists`. Individual endpoints are according to json-server format.

## Running the frontend
The frontend is created using Create React App, and can be run by the following command on a <u>**separate terminal window**</u>: `npm run start`
URL for frontend : `http://localhost:3000`

## List of technologies used
* React
* Redux Toolkit
* react-redux
* React Router v6
* React Bootstrap
* Json-server
