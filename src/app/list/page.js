import { connectDB } from "@/util/db"
import ListItem from "./ListItem"

//export const dynamic = 'force-dynamic'              // 빌드시 dynamic 페이지로 빌드되어야할 때 기입
export const revalidate = 20;               // 20초마다 캐싱

export default async function List(){

    // 늦게 처리되는 코드를 건너뛰지말고 기다려라 await
    const db = (await connectDB).db('mydb')                         // DB접속
    let result = await db.collection('post').find().toArray()       // post에서 데이터 가져옴

    // _id 필드를 문자열로 변환
    result = result.map(item =>({
        ...item,
        _id: item._id.toString(),
    }));

    return(
        <>
            <div className="list-bg">
                <ListItem result={result}/>
            </div>
        </>
    )
}
