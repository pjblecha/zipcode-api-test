// server.js

// instantiate express
const express = require('express');
const app = express();
const router = express.Router();

// set up routes
const routes = require('./api/routes');
app.use(routes);

// declare the port that the app will be exposed to
const port = process.env.PORT || 3000;

// start the app and listen on the port
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
