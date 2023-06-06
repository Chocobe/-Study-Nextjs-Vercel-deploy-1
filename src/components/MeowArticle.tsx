'use client';

import {
    useState,
    useEffect,
} from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
    const [meowData, setMeowData] = useState('데이터 준비중...');

    useEffect(() => {
        retrieveMeowData();

        async function retrieveMeowData() {
            const response = await fetch('https://meowfacts.herokuapp.com');
            const data = await response.json();

            setMeowData(data?.data?.[0]);
        };
    }, []);

    return (
        <article className={styles.article}>
            <h3>고양이 정보</h3>
            <p>{meowData}</p>
        </article>
    );
}
