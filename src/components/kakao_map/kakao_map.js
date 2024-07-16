import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=79a4ee7d7ce6d3c072e168d7975b328f&autoload=false`;

export default function KakaoMap()
{
    return(
        <div style={{width:'750px', height:'600px'}}>
            <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
            <Map center={{lat:33.450701, lng:126.570667}} style={{width:'100%', height:'100%'}}></Map>
        </div>
    )
}

// npm install react-kakao-maps-sdk