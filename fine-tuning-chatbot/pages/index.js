// pages/index.js
import Link from 'next/link';

const Page1 = () => {
    return (
        <div>
            <h1>This is Page 1</h1>
            <Link href="/index2">
                <a>Go to Page 2</a>
            </Link>
            <div>
                {/* 이곳에 Page 1에서 필요한 추가적인 HTML 코드를 작성하세요 */}
                <p>Welcome to Page 1</p>
                <button onClick={() => alert('Button Clicked!')}>Click Me</button>
            </div>
        </div>
    );
};

export default Page1;