export default function handler(req, res)
{
    console.log(res.query)
    return res.status(200).json()
}

// URL 파라미터를 사용해서 API 생성
// /api/abc/??? : 뭐든 다 가능 (abc로 되어있으면 그 후의 URL은 아무거나 다 가능하게 함)