/* eslint-disable*/

import { useEffect } from "react";
// kakao 기능 동작을 위해 넣어준다.
const { Kakao } = window;


function kakaoShare(){
    // export default () =>{
    //     // 배포한 자신의 사이트
    //     const realUrl = "https://master--mbtitestchat.netlify.app/"
    //     // 로컬 주소 (localhost 3000 같은거)
    //     const resultUrl = window.location.href;
    //
    //     // 재랜더링시에 실행되게 해준다.
    //     useEffect(()=>{
    //         // init 해주기 전에 clean up 을 해준다.
    //         Kakao.cleanup();
    //         // 자신의 js 키를 넣어준다.
    //         Kakao.init('0b8734b12b69c143778a10e9e76f4abd');
    //         // 잘 적용되면 true 를 뱉는다.
    //         console.log(Kakao.isInitialized());
    //     },[]);


        const shareKakao = () =>{

            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '오늘의 디저트',
                    description: '아메리카노, 빵, 케익',
                    imageUrl:
                        'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                    link: {
                        mobileWebUrl: "https://master--mbtitestchat.netlify.app/",
                    },
                },
                buttons: [
                    {
                        title: '나도 테스트 하러가기',
                        link: {
                            mobileWebUrl: "https://master--mbtitestchat.netlify.app/",
                        },
                    },
                ],
            });
        }

        return(
            <>
                <button
                    className='grey-btn'
                    onClick={() => {
                        shareKakao()
                    }}
                > 카카오톡 공유하기 </button>
            </>
        )
}