import {
    PropsWithChildren,
} from 'react';
import {
    Metadata,
} from 'next';
import Link from 'next/link';
import styles from './layout.module.css';
import localFont from 'next/font/local';
import {
    Nanum_Pen_Script,
} from 'next/font/google'

const pretendardFont = localFont({
    src: '../../public/fonts/Pretendard-1.3.6/variable/woff2/PretendardVariable.woff2',
});

const nanumPenScript = Nanum_Pen_Script({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: '멋진 제품 사이트',
    description: '멋진 제품을 판매하는 곳입니다.',
    icons: {
        icon: '/favicon-96x96.png',
    },
};

export type TRootLayoutProps = PropsWithChildren;

function RootLayout(props: TRootLayoutProps) {
    const {
        children,
    } = props;

    return (
        <html lang="ko">
            <head />
            <body className={`
                ${styles.body} ${pretendardFont.className}
            `.trim()}>
                <header className={styles.header}>
                    <h1 className={nanumPenScript.className}>
                        Demo Note
                    </h1>
                    <nav className={styles.nav}>
                        <Link href="/products">Products</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/suspense-practice">Suspense Practice</Link>
                    </nav>
                </header>

                {children}
            </body>
        </html>
    );
}

export default RootLayout;
