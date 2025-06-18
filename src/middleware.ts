import { getToken } from 'next-auth/jwt';
export { default } from "next-auth/middleware";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    // const { pathname } = req.nextUrl;

    // console.log("session >>>");
    // console.log(session);
    if (session) {
        const url = req.nextUrl.clone();
        if (req.nextUrl.pathname.startsWith('/auth')) {
            url.pathname = `/profile/dashboard`;
            return NextResponse.redirect(url);
        }
    } else {
        const requestedPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.search = requestedPage
        if (req.nextUrl.pathname.startsWith('/profile')) {
            url.pathname = `/login`;
            return NextResponse.redirect(url)
        }
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/profile/:path*", "/login", "/"],
};