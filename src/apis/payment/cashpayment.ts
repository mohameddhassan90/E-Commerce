"use server"
import { toast } from "sonner"
import { getTokenFn } from "../../../utilities/getToken"

interface ShippingAddressInterface {
    details: string,
    phone: string,
    city: string,
    postalCode: string,
}

export async function createCashPayment(cartId: string, shippingAddress: ShippingAddressInterface) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`${process.env.API}orders/${cartId}`, {
            method: 'POST',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                token: token,
                'Content-Type': 'application/json',
            }
        })

        if (!data.ok)
            throw new Error(data.statusText)

        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }
}