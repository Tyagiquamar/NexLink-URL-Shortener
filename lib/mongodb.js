import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const options = {
    useNewUrlParser: true,
};
let client; 
let clientPromise;

if(!process.env.MONGODB_URI) {
    throw new Error('ADD Mongo URI to .env.local');
}   

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to maintain the MongoDB client instance
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}   else {
    // In production mode, create a new MongoDB client instance
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
} 

export default clientPromise;