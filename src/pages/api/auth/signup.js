// 비밀번호 암호화
// npm install bcrypt

import bcrypt from 'bcrypt';
import { connectDB } from "@/util/db";

export default async function handler(req, res){
    try{
        if(req.method == 'POST'){
            let hash = await bcrypt.hash(req.body.password, 10);
            console.log(hash);
            console.log(req.body);
            req.body.password = hash;

            // 중복된 이메일이 있는지 검사
            // 빈칸이 있는지 검사
    
            let db = (await connectDB).db('mydb');
            await db.collection('user').insertOne(req.body);
            res.status(200).json({msg:'signup success'});
        }
    }catch(error){
        res.status(500).json({error:'signup failed: ' + error})
    }
}
