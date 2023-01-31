const { MongoClient} = require('mongodb');

(async () => {
    let connectionString = process.env.MONGO_DB_CONNECTIONSTRING;
    let collectionName = process.env.MONGO_DB_COLLECTION_NAME;

    let client = await MongoClient.connect(connectionString);
    let db = await client.db();
    let collection = db.collection(collectionName);

    console.log(`DbName: ${collection.dbName}\nCollectionName: ${collection.collectionName}`);
})();

