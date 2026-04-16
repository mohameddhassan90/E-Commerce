"use server"
import { getTokenFn } from "../../../../utilities/getToken"

export async function deleteFromCart(productId: string) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`${process?.env?.API}cart/${productId}`, {
            method: "DELETE",
            headers: {
                token: token,
                "Content-Type": "application/json",
            }
        })

        if (!data.ok)
            throw new Error(data?.statusText)

        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }
}