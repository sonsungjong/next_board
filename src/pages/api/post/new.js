/*
    /api/post/new 로 요청하면 이 서버 파일이 실행된다

    input에 입력되어 전달된 데이터를 몽고DB에 저장한다(insert)
*/

import { connectDB } from "@/util/db";

export default async function post_new_handler(req, res)
{
    // req.body 에 전송한 데이터가 담겨있다
    console.log(req.body);

    if(req.method == 'POST')            // POST 요청일 때
    {
        let {title, content} = req.body;
        if(title && content)        // 비어있지 않으면
        {
            try{
                const db = (await connectDB).db('mydb');
                let result = await db.collection('post').insertOne({ title, content });
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
