import { connectDB } from "@/util/db"
import { ObjectId } from "mongodb";

export default async function Edit({params})
{
    console.log(params)
    const db = (await connectDB).db('mydb');
    let result = await db.collection('post').findOne({_id:ObjectId.createFromHexString(params.slug)})
    //console.log(result)

    // _id 필드를 문자열로 변환해서 사용할 것
    const resultIdString = result._id.toString();

    return(
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="id" value={resultIdString} />
                <input name="title" placeholder="글제목" defaultValue={result.title}/>
                <input name="content" placeholder="글내용" defaultValue={result.content}/>
                <button type="submit">수정하기</button>
            </form>
        </div>
    )
}

// 수정하기 버튼을 누르면 actino에 해당하는 URL에 요청을 보내게 되어있음