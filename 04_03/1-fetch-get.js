(async () => {
    let url = 'https://google.com';
    const result = await fetch(url);
    if (result.ok) {
        const data = await result.text();
        console.log(data);
    }
})();