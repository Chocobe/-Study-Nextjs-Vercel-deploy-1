import Link from 'next/link';
import Image from 'next/image';
import { 
    getProducts,
} from '@/service/products';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpeg';

export const revalidate = 0;

async function ProductsPage() {
    // error.tsx 테스트를 위한 에러 발생시키기
    // throw new Error();

    const products = await getProducts();

    // fetch('https://meowfacts.herokuapp.com', {
    //     cache: 'no-cache',
    // });

    // const response = await fetch('https://meowfacts.herokuapp.com', {
    //     cache: 'reload',
    //     next: {
    //         revalidate: 3,
    //     },
    // });
    // const data = await response.json();
    // const factText = data.data;

    const random = Math.floor(Math.random() * 10 + 1);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${random}`, {
        cache: 'no-cache',
    });

    const data = await response.json();

    console.log('data.title: ', data.title);

    return (
        <div>
            <h1>제품 소개 페이지 - random: ({random})</h1>
            <div>
                <Image
                    priority
                    src={clothesImage}
                    alt="Clothes"
                    width={500}
                />
            </div>

            <h2>userId: {data.title}</h2>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link href={`/products/${product.id}`}>
                            {product.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* <article className={styles.article}>
                {factText}
            </article> */}

            <MeowArticle />
        </div>
    );
}

export default ProductsPage;
