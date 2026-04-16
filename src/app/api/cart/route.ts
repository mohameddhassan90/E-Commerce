import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function GET(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token) {
        return NextResponse.json(
            { success: false, error: "UNAUTHENTICATED", data: [] },
            { status: 401 }
        );
    }
    try {
        const data = await fetch(`${process.env.API}cart`, {
            headers: {
                token: token.token,
                "Content-Type": "application/json"

            }
        })
        if (!data.ok)
            return NextResponse.json({ error: data?.statusText }, { status: data?.status });
        const response = await data.json()
        return NextResponse.json(response)
    } catch (error) {
        return NextResponse.json(
            { success: false, error: "SERVER_ERROR", data: [] },
            { status: 500 }
        );
    }
}