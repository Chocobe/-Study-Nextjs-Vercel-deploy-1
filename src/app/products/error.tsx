'use client'; // error 컴포넌트는 Client Component 로 만들어야 함 (Server Component 는 안됨)

import { useEffect } from 'react';

type TProductsErrorProps = {
    error: Error;
    reset: () => void;
};

export default function ProductsError({
    error,
    reset,
}: TProductsErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }>
                Try again
            </button>
        </div>
    );
}
