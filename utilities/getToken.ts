"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getTokenFn():Promise<string>{
    const cookie = await cookies()
    const nextAuthToken = 
    cookie.get("__Secure-next-auth.session-token")?.value||
    cookie.get(`next-auth.session-token`)?.value
    if (!nextAuthToken) {
    throw new Error("No session token found");
  }
    const decodeCookie = await decode({secret:process.env.NEXTAUTH_SECRET! ,token:nextAuthToken})
    return decodeCookie?.token as string
}