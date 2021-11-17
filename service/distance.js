// distance.js
// https://zipcodeapi.com/

const res = require("express/lib/response");

// my API key: CAgZcY1gGVc3W1C3bD5YPdlLHti1mKJcgaSc0wxEcAQ7g5CDGbscrLYBRZjOkRqW
const apiKey = process.env.ZIPCODE_API_KEY || 'CAgZcY1gGVc3W1C3bD5YPdlLHti1mKJcgaSc0wxEcAQ7g5CDGbscrLYBRZjOkRqW';
const zipCodeURL = process.env.ZIPCODE_API_URL || 'https://zipcodeapi.com/rest/';
const httpLibReqd = (url) => {
    return url.startsWith('https') ? 'https' : 'http';
}

const getContent = (url) => {
    return new Promise((res, rej) => {
        const httpLib = require(httpLibReqd(url));
        const rq = httpLib.get(url, (rsp) => {
            if (rsp.statusCode < 200 && rsp.statusCode > 299) {
                rej(new Error(`Failed to load page, status code ${rsp.statusCode}`));
            }
            const body = [];
            rsp.on('data', (chk) => body.push(chk));
            rsp.on('end', () => res(body.join('')));
        });
        rq.on('error', (err) => rej(err));
        });
};

var distance = {
    find: (req, res, next) => {
        const callURL = `${zipCodeURL}${apiKey}/distance.json/${req.params.zipcode1}/${req.params.zipcode2}/mile`;
        console.log(callURL);
        getContent(callURL)
            .then((rsp) => res.send(JSON.parse(rsp)))
            .catch((err) => res.end(err));
    },
};
module.exports = distance;