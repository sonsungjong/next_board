// @/util/db.js

import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:admin@cluster0.fmojzer.mongodb.net/?retryWrites=true&w=majority';
const options = {};
let connectDB;
// let connectDB: Promise<MongoClient>;
//declare global {
  //var _mongo: Promise<MongoClient> | undefined;
//}

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url, options).connect()
}

export {connectDB}

/*
    const db = (await connectDB).db('DB명');

    const allUsers = await db.collection('폴더명').find().toArray();                   // 배열로 가져오기
    const admins = await db.collection('폴더명').find({ role: 'admin' }).toArray();               // 조건 조회
    const oneUser = await db.collection('폴더명').findOne({ 'email': 'a@b.com' });                    // 하나만 찾기
    await db.collection('폴더명').insertOne({ 'email': 'a@b.com', 'password': 'hash' });              // 삽입
    await db.collection('폴더명').updateOne({ 'email': 'a@b.com' }, { $set: { 'email': 'c@d.com' } });                // 업데이트
    const findandupate = await db.collection('폴더명').findOneAndUpdate({'email':prev_value}, { $set: {'email':new_value}});              // 몽고DB의 key를 찾아서 변경
    const findanddelete = await db.collection('폴더명').findOneAndDelete({'email':prev_value});             // 하나 찾아서 삭제
*/
