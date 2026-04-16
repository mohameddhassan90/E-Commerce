"use server"
import { toast } from "sonner";
import { getTokenFn } from "../../../../utilities/getToken";

export async function removeFavorite(productId: string) {
    const token = await getTokenFn()
    if (!token) {
        return {
            success: false,
            message: "Need To SignIn",
        };
    }

    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
            method: "DELETE",
            headers: {
                token: token,
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