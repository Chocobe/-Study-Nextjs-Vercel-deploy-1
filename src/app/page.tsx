import Image from 'next/image'
import Counter from '../components/Counter';

export default function Home() {
    // Server Side Rendering 에서만 실행됨
    console.log('SSR');

    return (
        <div>
            <h1>Nextjs 13 홈페이지</h1>
            <Counter />
            <Image
                priority
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Shopt"
                width={400}
                height={400} />
        </div>
    );
}
