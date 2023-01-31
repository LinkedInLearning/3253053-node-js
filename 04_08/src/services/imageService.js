const db = require('../data/mongoose');

exports.getImages = async () => {
    let images = await db.getImages();
    return images;
}

exports.addImage = async (image) => {
    try {
        let result = db.addImage(image);
        return result;

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

exports.UpdateImage = async (id, image) => {
    try {
        return await db.UpdateImage(id, image);
    } catch (error) {
        return undefined;
    }
}

exports.RemoveImage = async (id) => {
    try {
        return await db.deleteImage(id);
    } catch (error) {
        return undefined;
    }
}