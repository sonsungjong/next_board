'use client'

import { useState } from 'react';
// 새로고침없이 리액트 방식으로 ajax요청해서 댓글입력(fetch)
import './comment.css';

export default function Comment(){

    let [comment, setComment] = useState('')

    return(
        <div>
            <div>댓글목록</div>
            <input onChange={(e)=>{setComment(e.target.value)}} />
            <button onClick={()=>{
                fetch('/api/comment/new', {method:'POST', body:comment})
            }}>댓글입력</button>
        </div>
    )
}

// 부모의 ObjectId 를 저장해놓기