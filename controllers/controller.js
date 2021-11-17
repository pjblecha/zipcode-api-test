// controller.js
'use strict';

// get properties of the app from the package file
const properties = require('../package.json');

// connect to the zipcodes distance API
const distance = require('../service/distance');

// instantiate my API methods: about and getDistance
var controllers = {
    about: (req, res) => {
        res.json({
            name: properties.name,
            version: properties.version
        });
    },
    getDistance: (req, res) => {
        distance.find(req, res, (distance, error_msg) => {
            if (error_msg) {
                console.log(`Controller catching error:\r\n${JSON.stringify(error_msg)}`);
            };
        });
    }
};
module.exports = controllers;
