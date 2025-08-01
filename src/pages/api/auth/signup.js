// 비밀번호 암호화
// npm install bcrypt

import bcrypt from 'bcrypt';
import { connectDB } from "@/util/db";

export default async function handler(req, res){
    // CORS 설정
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try{
        console.log('들어옴')
        if(req.method == 'POST'){
            console.log(req.body)
            let hash = await bcrypt.hash(req.body?.password, 10);
            console.log(hash);
            console.log(req.body);
            req.body.password = hash;
    
            let db = (await connectDB).db('mydb');                      // DB명
            await db.collection('user').insertOne(req.body);            // 폴더명
            return res.redirect(302, '/api/auth/signin');
        }
    }catch(error){
        res.status(500).json({error:'signup failed: ' + error})
    }
}
