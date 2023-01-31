const db = require('../data/mongodb');

exports.getImages = async () => {
    let images = await db.getImages();
    return images;
}

exports.addImage = async (image) => {
    try {
        let result = await db.addImage(image);
        return result.insertedId;

    } catch (error) {
        return undefined;
    }
}

exports.getImage = async (id) => {
    try {
        let result = await db.getImage(id);
        return result;
    } catch (error) {
        return undefined;
    }
}