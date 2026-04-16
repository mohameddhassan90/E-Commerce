"use server"
import { getUserId } from "../../../utilities/getUserId"

export async function getUserOrders() {
    const userId = await getUserId()
    if (!userId)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)

        if (!data.ok) {
            throw new Error(data.statusText)
        }
        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }
}