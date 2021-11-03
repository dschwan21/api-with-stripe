const express = require('express');

// Create a new express application instance
const server = express();

//Routers

//API Endpoints

server.get("/", (req, res) => {
    res.send("welcome to api project!!")
    })

module.exports = server;