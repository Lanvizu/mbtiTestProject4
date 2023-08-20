// pages/index.js
import Link from 'next/link';

import React, { useEffect } from "react";
import styles from "@/public/styles/App2.module.css";

export const shareKakao1 = (route, title, text) => {
    if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
            kakao.init(process.env.NEXT_PUBLIC_API_KEY);
        }

        kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: "대화하러 가기",
                description: text,
                imageUrl: "https://user-images.githubusercontent.com/139981434/257801881-fbc96ead-3194-4745-be55-6b6d55524b51.png",
                link: {
                    mobileWebUrl: route,
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

const MBTITEST = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
    }, []);

    return (
        <div>
            <button
                className={styles["kakaoButton"]}
                id="kakao-link-btn"
                type="button"
                onClick={() =>
                    shareKakao1(
                        window.location.toString(),
                        "내 mbti는?! #채팅형_mbti_테스트",
                        "테스트 하러가기"
                    )
                }
            >
                <img src="https://seeklogo.com/images/K/kakaotalk-logo-274D191B7B-seeklogo.com.png" height="30" />
            </button>
        </div>
    );
};

export default MBTITEST;