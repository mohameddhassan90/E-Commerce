"use server"
import { toast } from "sonner";
import { getTokenFn } from "../../../../utilities/getToken";

export async function addFavorite(productId: string) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            method: "POST",
            body: JSON.stringify({ productId }),
            headers: {
                token: token,
                "Content-Type": "application/json"
            }
        })

        if (!data?.ok)
            throw new Error(data?.statusText)

        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }
}