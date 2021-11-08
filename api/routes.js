// routes.js
'use strict';

const express = require('express');
const router = express.Router();

// instantiate controller class
const controller = require('../controllers/controller');

// declare the routes in express VERSION 4 (not 3, from those stupid old tutorials)
router.route('/about')
    .get((req, res) => {
        controller.about(req, res);
    });
router.route('/distance/:zipcode1/:zipcode2')
    .get((req, res) => {
        controller.getDistance(req, res);
    });
// export the routes to the incoming app class
module.exports = router;

/* Original code
'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/about')
       .get(controller.about);
   app.route('/distance/:zipcode1/:zipcode2')
       .get(controller.getDistance);
};
 */