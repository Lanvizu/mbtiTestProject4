// pages/index.js
import Link from 'next/link';

import React, { useEffect } from "react";
import styles from "@/public/styles/App2.module.css";

export const shareKakao1 = (route, title, text) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(process.env.NEXT_PUBLIC_API_KEY);
            // '0b8734b12b69c143778a10e9e76f4abd'
            // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
        }

        kakao.Link.sendDefault({
            objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
            content: {
                title: "대화하러 가기",
                description: '내 mbti는?! #채팅형_mbti_테스트',
                imageUrl: "https://user-images.githubusercontent.com/139981434/257801881-fbc96ead-3194-4745-be55-6b6d55524b51.png",
                link: {
                    mobileWebUrl: window.location.toString(),
                    webUrl: window.location.toString()
                }
            },
            buttons: [
                {
                    title: "대화하러 가기",
                    link: {
                        mobileWebUrl: window.location.toString(),
                        webUrl: window.location.toString()
                    }
                }
            ]
        });
    }
};

const MBTITEST = () => {
    return (
        <div>
            <button className={styles["kakaoButton"]}
                    id="kakao-link-btn"
                    type="button"
                    onClick={() => shareKakao1(r.toString(), "내 mbti는?! #채팅형_mbti_테스트", "테스트 하러가기")}
            >
                <img src="https://seeklogo.com/images/K/kakaotalk-logo-274D191B7B-seeklogo.com.png" height="30"/>
            </button>
        </div>
    );
};

export default MBTITEST;

// 'use client';

// import React, { useEffect } from "react";
// export { Provider } from 'react-redux';
// var Kakao;
//
// (function() {
//     var e = document.createElement("script");
//     e.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
//     e.async = true;
//     document.head.appendChild(e);
//     e.onload = function() {
//         Kakao = window.Kakao;
//
//         // 카카오톡 SDK 초기화
//         Kakao.init(process.env.NEXT_PUBLIC_API_KEY);
//
//         // 버튼 클릭 시 카카오톡 공유하기 창 열기
//         document.getElementById('kakao-share-button').addEventListener('click', function() {
//             Kakao.Link.sendDefault({
//                 objectType: 'feed',
//                 content: {
//                     title: '대화하러 가기',
//                     description: '내 mbti는?! #채팅형_mbti_테스트',
//                     imageUrl: 'https://user-images.githubusercontent.com/139981434/257801881-fbc96ead-3194-4745-be55-6b6d55524b51.png', // 원하는 이미지의 URL을 입력합니다.
//                     link: {
//                         mobileWebUrl: window.location.toString(),
//                         webUrl: window.location.toString()
//                     }
//                 },
//                 buttons: [
//                     {
//                         title: "대화하러 가기",
//                         link: {
//                             mobileWebUrl: window.location.toString(),
//                             webUrl: window.location.toString()
//                         }
//                     }
//                 ]
//             });
//         });
//     };
// })();