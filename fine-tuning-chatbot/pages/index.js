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
                description: text, // 인자값으로 받은 title
                imageUrl: "https://user-images.githubusercontent.com/139981434/257801881-fbc96ead-3194-4745-be55-6b6d55524b51.png",
                link: {
                    mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
                    webUrl: route
                }
            },
            buttons: [
                {
                    title: "대화하러 가기",
                    link: {
                        mobileWebUrl: route,
                        webUrl: route
                    }
                }
            ]
        });
    }
};

const Page1 = () => {
    return (
        // <div>
        //     <h1>This is Page 1</h1>
        //     <Link href="/index2">
        //         <a>Go to Page 2</a>
        //     </Link>
        // </div>

        <div>
            <button className={styles["kakaoButton"]}
                    id="kakao-link-btn"
                    type="button"
                    onClick={() => shareKakao(r.toString(), "내 mbti는?! #채팅형_mbti_테스트", share_text)}
            >
                <img src="https://seeklogo.com/images/K/kakaotalk-logo-274D191B7B-seeklogo.com.png" height="30"/>
            </button>
        </div>
    );
};

export default Page1;