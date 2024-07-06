'use client'

import { useEffect, useState } from 'react';
// 새로고침없이 리액트 방식으로 ajax요청해서 댓글입력(fetch)
import './comment.css';

export default function Comment({_id}){

    let [comment, setComment] = useState('')
    let [commentList, setCommentList] = useState([])

    // 댓글 목록을 요청한다 (ajax, timer)
    // GET요청으로 값을 전달할때는 URL에 이어붙이는 query string을 이용
    useEffect(()=>{
        fetch('/api/comment/list?id=' + _id)
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
            setCommentList(result)
        })
    }, [commentList.length, _id])

    return(
        <div className='container-comment'>
            <div>댓글목록</div>
            <hr/>
            {
                commentList && commentList.length > 0 ? (
                    commentList.map((item, index)=>{
                        return(
                            <p key={index}>{item?.content}</p>
                        )
                    })
                ) :
                null
            }
            <input onChange={(e)=>{setComment(e.target.value)}} id='comment-input'/>
            <button onClick={()=>{
                document.getElementById('comment-input').value = '';
                fetch('/api/comment/new', {method:'POST', body: JSON.stringify(
                    {comment:comment, _id:_id}) })
                .then(res=>{
                    if(res.ok){
                        return res.json();
                    }
                })
                .then((result)=>{
                    setCommentList(list => [...list, result]);          // 새 댓글 추가
                    setComment('');         // 입력필드 초기화
                })
                .catch(error=>console.error('댓글 입력 에러 발생'))
            }}>댓글입력</button>
        </div>
    )
}


// onChange : 사용자가 입력할때마다 실행
// e.target.value : 입력되어있는 값
// input에 입력한 값을 state에 저장하게 만든다
// 버튼을 클릭하면 state값을 fetch 요청을 날리게 만든다

// Document문서 하나에 8MB까지
// 댓글은 별도의 document로 만든다
// 메인글의 ObjectId 를 같이 넣어놓기 (종속관계)