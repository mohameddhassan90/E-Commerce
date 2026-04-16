import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const token = await getToken({ req , secret:process.env.NEXTAUTH_SECRET, })
    if (!!token)
        return NextResponse.next()
    return NextResponse.redirect(new URL('/signin', req.url))
}

export const config = {
    matcher: ["/cart","/wishlist","/profile/adress","/profile/setting",]
}