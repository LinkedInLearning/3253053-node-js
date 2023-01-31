const https = require('node:https');

// req: <http.ClientRequest>
const req = https.get(
    'https://google.com',
    (res) => {
        // res: <http.IncommingMessage>
        console.log('StatusCode is: ', res.statusCode);
        console.log(res.headers);
        res.on('data', (data) => {
            console.log(data.toString());
        })
    }
);
req.on('error', err => console.log(err));