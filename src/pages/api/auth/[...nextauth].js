import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: 'Ov23li82mgESSL5ZHg1b',
      clientSecret: '3dd63157eb3928aa3c2f2cc99b6199c21c606e02',
    }),
    GoogleProvider({
        clientId: '491590133383-1tm2evi5eocuqg0edk4mihbhs7pttjea.apps.googleusercontent.com',
        clientSecret: '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',
      }),
  ],
  secret: 'sonsungjong0000'
};

export default NextAuth(authOptions);


// 깃허브 로그인 -> 우측아이콘 -> Settings -> Developer settings -> OAuth Apps -> Register a new application
// -> Application name 입력, http://localhost:3000/ 입력 (실제 사이트면 실제사이트 URL 입력)
// -> Generate a new client secret 버튼 클릭

// Ov23li82mgESSL5ZHg1b
// 3dd63157eb3928aa3c2f2cc99b6199c21c606e02

// npm install next-auth
// pages 폴더 안에 api 폴더 안에 auth 폴더를 생성하고 [...nextauth].js 파일 생성






// https://console.cloud.google.com/ -> API 및 서비스 -> OAuth 동의 화면 (External 버튼)
// 사용자 인증 정보 -> OAuth 2.0 클라이언트 생성 -> 웹 애플리케이션 -> 이름 -> 승인된 리디렉션 URI 추가(http://localhost:3000/api/auth/callback/google)

// 클라이언트ID : 491590133383-1tm2evi5eocuqg0edk4mihbhs7pttjea.apps.googleusercontent.com
// 클라이언트 보안 비밀번호 : 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
