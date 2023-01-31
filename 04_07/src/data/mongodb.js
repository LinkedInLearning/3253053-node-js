const { MongoClient, ObjectId} = require('mongodb');

let db = undefined;
let collection = undefined;
(async () => {
    let connectionString = process.env.MONGO_DB_CONNECTIONSTRING;
    let collectionName = process.env.MONGO_DB_COLLECTION_NAME;

    let client = await MongoClient.connect(connectionString);
    let db = await client.db();
    collection = db.collection(collectionName);

    console.log(`DbName: ${collection.dbName}\nCollectionName: ${collection.collectionName}`);
})();

// GET
exports.getImages = () => 
    new Promise((resolve, reject) => {
        try {
            collection.find({})
            .toArray((err, docs) => {
                if (err) {
                    return reject(err);
                }
                resolve(docs);
            })
        } catch (error) {
            reject(err);
        }            
});

exports.getImage =  (id) => 
    new Promise(async (resolve, reject) => {
        try {
            let imageId = ObjectId(id);
            let result = await collection.find({_id:imageId}).toArray();
            console.log(imageId);
            resolve(result[0]);
        } catch (error) {
            reject(error)
        }
});

// POST
exports.addImage = (image) =>
    new Promise(async (resolve, reject) => {
        try {
            let result  =await collection.insertOne(image);
            resolve(result);
        } catch (error) {
            reject(error);
        }
});





