"use server"
import { productType } from "@/interfaces/cart.interface"
import { getTokenFn } from "../../../utilities/getToken"
import { ProductInterFace } from "@/interfaces/product.interface"

export async function getWishlist() {
    const token = await getTokenFn()
    if (!token)
        return [];

    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers: { token: token }, cache: "no-store" })

        if (!data)
            return [];

        const response: { data: ProductInterFace[] } = await data.json()
        return response.data
    } catch (error: any) {
        throw new Error(error?.message)
    }
}