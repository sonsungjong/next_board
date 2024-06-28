import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    if(req.method == 'POST'){
        console.log(req.body)           // 서버는 JSON 문자열로 전달받음
        let reqObject = JSON.parse(req.body)
        console.log(reqObject)      // object 자료형로 변환해서 사용

        let session = await getServerSession(req, res, authOptions)
        console.log(session)
        
        let insertItem = {}

        if(session !== null){
            insertItem = {
                content : reqObject.comment,
                parent : ObjectId.createFromHexString(reqObject._id),
                email: session.user?.email
            }
            
            try{
                const db = (await connectDB).db('mydb')
                let result = await db.collection('comment').insertOne(insertItem);
    
                res.status(200).json(result)
            }catch(error){
                console.error('Error: ', error)
                res.status(500).json({error:'Database insert failed'})
            }
        }else{
            res.status(400).json({error:'login failed'})
        }
    }else{
        res.status(405).json({error:'Method not allowed'})
    }
}
