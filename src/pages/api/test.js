// 서버 코드

// /api/test 로 요청하면
export default function handler(req, res){
    console.log(123)

    if(req.method == 'POST'){
        return res.status(200).json('POST Hello');
    }else if(req.method == 'GET'){
        return res.status(200).json('GET Hello');
    }
}

// 서버기능 성공시 200
// 서버기능 실패시 500
// 요청실수 400

// pages 폴더의 api 폴더에 .js파일을 만들면 서버URL 로 취급