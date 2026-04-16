import { CartItem } from "@/interfaces/cart.interface"
import { getTokenFn } from "../../../utilities/getToken"
import { toast } from "sonner"

export async function getCart(): Promise<CartItem> {
    const token = await getTokenFn()

    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`${process.env.API}cart`, {
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