// distance.js
// https://zipcodeapi.com/
// my API key: CAgZcY1gGVc3W1C3bD5YPdlLHti1mKJcgaSc0wxEcAQ7g5CDGbscrLYBRZjOkRqW
const axios = require('axios');
const apiKey = process.env.ZIPCODE_API_KEY || 'CAgZcY1gGVc3W1C3bD5YPdlLHti1mKJcgaSc0wxEcAQ7g5CDGbscrLYBRZjOkRqW';
const zipCodeURL = process.env.ZIPCODE_API_URL || 'https://zipcodeapi.com/rest/';

// Call ZipCode API and return distance based on passed-in parameters
var distance = {
    find: (req, res, next) => {
        const callURL = `${zipCodeURL}${apiKey}/distance.json/${req.params.zipcode1}/${req.params.zipcode2}/mile`;
        axios.get(callURL)
            .then((response) => {
                res.json(response.data);
            })
            .catch((error_msg) => {
                console.log(error_msg);
                res.json({
                    distance: -1
                });
            });
    },
};
module.exports = distance;

/* Original code
var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY || "hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
   find: function(req, res, next) {
       request(zipCodeURL + apiKey 
               + '/distance.json/' + req.params.zipcode1 + '/' 
               + req.params.zipcode2 + '/mile',
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               res.send({distance: -1});
           }
       });

   }
};

module.exports = distance;
 */