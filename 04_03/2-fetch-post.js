
(async () => {

    let url = 'https://google.com';

    let data = { username: 'Nina' };
    let headers = {
        'Content-Type': 'application/json'
    };

    try {
        const result = await fetch(
            url, 
            { 
                headers: headers,
                method: 'POST',
                body: JSON.stringify(data)
            });
        if (result.ok) {
            console.log(result.json())
        }
    } catch (error) {
        console.error(error);
    }

})();