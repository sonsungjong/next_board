import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:admin@cluster0.0t9wkx9.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
let connectDB;

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url, options).connect()
}

export {connectDB}

//const client = await MongoClient.connect(url, options)
//const db = client.db('mydb')
//db.collection('post').find()
