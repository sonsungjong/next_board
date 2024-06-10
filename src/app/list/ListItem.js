'use client'

import Link from "next/link"

// 클라이언트 컴포넌트로 분리

export default function ListItem({result}){

    return(
        <>
            {
                result && result.length > 0 ? result.map((item, index)=>{
                    return(
                        <div className="list-item" key={index}>
                            <Link href={`/detail/` + item._id}>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </Link>
                            <Link href={'/edit/' + item._id}>✏️수정</Link>
                            <span onClick={()=>{
                                fetch('/api/delete/list_item', {
                                    method: 'DELETE',
                                    body:item._id
                                })
                                .then((res)=>{
                                    if(res.status == 200){
                                        return res.json();
                                    }else{
                                        return "500";
                                    }
                                })
                                .then((result)=>{
                                    console.log(result);
                                })
                                .catch((error)=>{
                                    console.log(error);
                                })
                            }}>🗑️삭제</span>
                        </div>            
                    )
                }) : null
            }
        </>
    )
}

