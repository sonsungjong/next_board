import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";


export default async function listItemHandler(req, res)
{
    console.log(req.body);
    if(req.method == 'DELETE')
    {
        try{
            const db = (await connectDB).db('mydb');
             let result = await db.collection('post').deleteOne(
                 {_id: ObjectId.createFromHexString(req.body)}
             );
             console.log(result);
            res.status(200).json('삭제완료');
        }catch(error){
            console.error('Database error:', error);
            res.status(500).json({ error: 'Database Error' });
        }
    }
}