import { nextResponse } from 'next/server';

export function middleware() {
    return NextResponse.redirect(new URL('manutenção', request.url));
}