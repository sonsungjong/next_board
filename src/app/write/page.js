import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth"

export default async function Write(){

    let session = await getServerSession(authOptions);
    console.log(session);
    
    if(session){
        return(
            <div className="p-20">
                <h4>글작성</h4>
                <form action="/api/post/new" method="POST">
                    <input name="title" placeholder="글제목"/>
                    <input name="content" placeholder="글내용"/>
                    <button type="submit">ACTION에 해당하는 URL에 POST요청</button>
                </form>
    
                <br/>
                <form action="/api/test" method="GET">
                    <button type="submit">ACTION에 해당하는 URL에 GET요청</button>
                </form>
            </div>
        )
    }else{
        return(
            <div>로그인이 필요해요</div>
        )
    }

}

// title과 content 입력하게하고 DB추가
// 전송버튼 누르면 서버에 글을 보내고
// 서버는 DB에 저장한다
