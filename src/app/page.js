import Image from "next/image";
import styles from "./page.module.css";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/db";

// 1. pagejs, globalscss, pagemodulecss 를 비운다
// 2. 관계형DB : 표로 저장, 비관계형DB : 표가 아닌 형식으로 저장
// 3. mongodb.com 호스팅 서비스 이용 (로그인)
// 4. Access Manager에서 Organization Access
// 5. Project 생성 (샘플/자동권한 체크 모두 해제)
// 6. Project 생성하고 해당 프로젝트 들어가서 Cluster 생성
// 7. Browse Collection 에서 데이터베이스 생성
// 8. npm install mongodb


export default async function Home() {

  try {
    const client = await connectDB;
    const db = client.db('mydb');
    let result = await db.collection('post').find().toArray();
    console.log(result);
    let aa = 'a';

    return (
        <div>
          ㅎㅇ
          <p>{result[0]?.title}</p>
          <p>{result[0]?.content}</p>
        </div>
    );
  } catch (error) {
    console.error("Connection error:", error);
    return (
        <div>Connection error: {error.message}</div>
    );
  }
}
