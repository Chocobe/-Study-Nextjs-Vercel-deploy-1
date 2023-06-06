import {
    Suspense,
} from 'react';

function SuspensePracticeLoading() {
    return (
        <div style={{ color: '#ff1493' }}>
            🤓🤓🤓 상세 정보 로딩 중...
        </div>
    );
}

async function DetailInfo({
    id,
}: {
    id: string;
}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-cache',
    });

    const data = await response.json();

    console.log('detail data: ', data.userId);

    return (
        <div>
            <h2>상세정보 요청 완료</h2>
            <div>
                <div>userId: {data.userId}</div>
            </div>
        </div>
    );
}
const ParsedDetailInfo = DetailInfo as any;

export const revalidate = 0;

async function SuspensePractice() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-cache',
    });

    const data = (await response.json()) as Array<{
        id: string;
        title: string;
        body: string;
    }>;

    const randomIndex = Math.floor(Math.random() * data.length);

    return (
        <div>
            <h1>Suspense 를 사용한 부분 Loading 연슨</h1>

            <div>
                <h3>3번 Item 상세정보</h3>
                <Suspense fallback={<SuspensePracticeLoading />}>
                    <ParsedDetailInfo id={data[randomIndex].id} />
                </Suspense>
            </div>

            <div>
                <h3>목록</h3>
                <ul>
                    {data.map(({ id, title, body }) => (
                        <li key={id}>
                            <div style={{ fontWeight: 900 }}>
                                {title}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SuspensePractice;
