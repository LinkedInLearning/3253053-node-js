
exports.get_products = () => {
    return new Promise((resolve, reject) => {
        var products = ['Tomatoes', 'Onions', 'oil', 'Rice', 'salt']
            .map((v, i) => ({ id: i+1, naam: v }));
        resolve(products);
    });
};