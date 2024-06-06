// 서버 코드

import { connectDB } from "@/util/db";

// /api/list 로 요청하면
export default async function reqApiList(req, res){
    console.log(123)
    const db = (await connectDB).db('mydb')                         // DB접속
    let result = await db.collection('post').find().toArray()       // post에서 데이터 가져옴

    if(req.method == 'POST'){
        return res.status(200).json('List POST 요청 결과');
    }else if(req.method == 'GET'){
        return res.status(200).json(result);
    }
}

// 서버기능 성공시 200
// 서버기능 실패시 500
// 요청실수 400