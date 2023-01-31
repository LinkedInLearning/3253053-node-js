const {writeFile} = require('node:fs/promises');

exports.fetchData = async (endpoint, count, api_key) => {
    let url = `${endpoint}?count=${count}&api_key=${api_key}`;
    var result = { data: undefined, error: undefined};
   try {
        const response = await fetch(url);
        if (response.ok) {
            result.data = await response.json();
        }
   } catch(err) {
        result.error = err.message;
   }
   return result;
};

exports.SaveDataToFile = async (path, data) => {
    await writeFile(path, data)
}

exports.PrintApodData = (data) => {
    new Promise((resolve, reject) => {
        data.forEach((element, index) => {
            console.log(`${index + 1}. ${element.title} (${element.date})\n`);
            console.log(`${element.explanation}\n`);
            console.log(element.url);
            console.log('\----------------------------------\n');
        });
        resolve(true);
    })
}



