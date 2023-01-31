require('dotenv').config();
const { fetchData, SaveDataToFile, PrintApodData } = require('./3-fetch');

//
(async () => {
    let api_key = process.env.APOD_API_KEY;
    let endpoint = process.env.APOD_ENDPOINT;
    let jsonFile = process.env.JSON_FILE_NAME;
    let count = 30;

    const result = await fetchData(endpoint, count, api_key);
    console.log(result);
    if (result !== undefined) {
        await SaveDataToFile(`./${jsonFile}`, JSON.stringify(result.data));
        await PrintApodData(result.data)
    }
})();