import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";


export default async function handler(req, res){
    // GET요청의 query string 받기
    console.log(req.query)

    const db = (await connectDB).db('mydb')
    let result = await db.collection('comment').find({parent:ObjectId.createFromHexString(req.query.id)}).toArray()
    res.status(200).json(result)
}