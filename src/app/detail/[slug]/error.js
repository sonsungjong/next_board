'use client'

export default function Error({error, reset}){
    // error : 에러 메시지
    // reset : 페이지 다시 로딩해주는 함수

    return(
        <div>
            <h4>에러 발생</h4>
            <p>{error}</p>
            <button onClick={()=>{reset()}}>리셋 버튼</button>
        </div>
    )
}

// 에러 발생시 보여줄 페이지
