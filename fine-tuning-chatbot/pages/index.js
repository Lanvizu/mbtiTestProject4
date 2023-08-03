// pages/index.js
import Link from 'next/link';

import { useEffect } from "react";
// kakao 기능 동작을 위해 넣어준다.

const Page1 = () => {
    return (
        <div>
            <h1>This is Page 1</h1>
            <Link href="/index2">
                <a>Go to Page 2</a>
            </Link>
        </div>
    );
};

export default Page1;