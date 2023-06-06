import {
    Metadata
} from 'next';
import {
    notFound,
} from 'next/navigation';
import { 
    getProduct,
    getProducts,
} from '@/service/products';
import Image from 'next/image';

type TSlugPageProps = {
    params: {
        slug: string;
    };
};

export const revalidate = 3;

export const generateMetadata = ({ params }: TSlugPageProps): Metadata => ({
    title: `제품명: ${params.slug}`,
});

async function ProductPage(props: TSlugPageProps) {
    const {
        params: {
            slug,
        },
    } = props;

    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    return (
        <div>
            <h1>
                {product.name} 제품 설명 페이지
            </h1>

            <Image
                src={product.imageSrc}
                alt={product.name}
                width={500}
                height={500}
            />
        </div>
    );
}

async function generateStaticParams() {
    const products = await getProducts();

    return products.map(product => ({
        slug: product.id,
    }));
}

export default ProductPage;
export {
    generateStaticParams,
};
