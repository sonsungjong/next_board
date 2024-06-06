export default function Write(){
    return(
        <>
            <h4>글작성</h4>
            <form action="/api/test" method="POST">
                <button type="submit">POST요청 버튼</button>
            </form>

            <form action="/api/test" method="GET">
                <button type="submit">GET요청 버튼</button>
            </form>
        </>
    )
}

// title과 content 입력하게하고 DB추가