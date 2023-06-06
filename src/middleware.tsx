import { NextRequest } from 'next/server';

function middleware(request: NextRequest) {
    console.log('middleware() 호출함: request: ', request);
}

export default middleware;
