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

/* Original code
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});
*/