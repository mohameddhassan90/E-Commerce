"use server"
import { toast } from "sonner"
import { getTokenFn } from "../../../utilities/getToken"

export async function getUserAdress() {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
            headers: {
                token: token,
            }
        })
        if (!data.ok) {
            throw new Error(data.statusText)
        }
        const response = await data.json()
        return response?.data
    } catch (error: any) {
        throw new Error(error?.message)
    }
}