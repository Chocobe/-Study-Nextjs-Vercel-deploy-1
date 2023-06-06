'use client';

import {
    useState,
} from 'react';

function Counter() {
    console.log('CSR');

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>

            <button onClick={() => setCount(count => --count)}>
                Decrease
            </button>

            <button onClick={() => setCount(count => ++count)}>
                Increase
            </button>
        </div>
    );
}

export default Counter;
