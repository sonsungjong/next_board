import { connectDB } from "@/util/db"
import Link from "next/link"

export default async function List(){

    // 늦게 처리되는 코드를 건너뛰지말고 기다려라 await
    const db = (await connectDB).db('mydb')                         // DB접속
    let result = await db.collection('post').find().toArray()       // post에서 데이터 가져옴

    return(
        <>
            <div className="list-bg">
                {
                    result && result.length > 0 ? result.map((item, index)=>{
                        return(
                            <div className="list-item" key={index}>
                                <Link href={`/detail/` + item._id}>
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                </Link>
                            </div>            
                        )
                    }) : null
                }
            </div>
        </>
    )
}