/*
    /api/post/edit 로 요청하면 이 서버의 파일이 실행된다

    input에 입력되어 전달된 데이터를 업데이트한다(update)
*/

import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";

export default async function post_edit_handler(req, res)
{
    // req.body 에 전송한 데이터가 담겨있다 (input의 name 속성이 key로 취급됨)
    console.log(req.body);

    if(req.method == 'POST')            // POST 요청일 때
    {
        if(req.body.title && req.body.content)        // 비어있지 않으면
        {
            try{
                const db = (await connectDB).db('mydb');
                let result = await db.collection('post').updateOne(
                    {_id: ObjectId.createFromHexString(req.body.id)}, 
                    {$set: {title : req.body.title, content : req.body.content}}
                );
                return res.redirect(302, '/list');          // 요청 처리 후 리스트 페이지로 이동
            }catch(error){
                console.error('Database error:', error);
                return res.status(500).json({ error: 'Database Error' });
            }
        }
        else
        {
            return res.status(400).json({ error: '빈칸은 허용되지 않습니다.' });
        }
    }
    else
    {
        return res.status(405).json({ error: 'Method Not Allowed' }); // POST 이외의 요청에 대한 처리
    }
}
