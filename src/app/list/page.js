import { connectDB } from "@/util/db"
import ListItem from "./ListItem"

export default async function List(){

    // 늦게 처리되는 코드를 건너뛰지말고 기다려라 await
    const db = (await connectDB).db('mydb')                         // DB접속
    let result = await db.collection('post').find().toArray()       // post에서 데이터 가져옴

    return(
        <>
            <div className="list-bg">
                <ListItem result={result}/>
            </div>
        </>
    )
}
