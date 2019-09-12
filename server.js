const express = require('express');

const server = express();

// --- Do i need this? --- 
// server.use(express.json());

const projectsRouter = require('./projects/projectsRouter');
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Hello from server.js!</h2>`)
});

module.exports = server;