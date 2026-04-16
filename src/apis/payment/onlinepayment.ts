"use server"
import { toast } from "sonner"
import { getTokenFn } from "../../../utilities/getToken"

interface ShippingAddressInterface {
    details: string,
    phone: string,
    city: string,
    postalCode: string,
}

export async function createOnlinePayment(cartId: string, shippingAddress: ShippingAddressInterface) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process?.env?.NEXTAUTH_URL}`, {
            method: 'POST',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                token: token,
                'Content-Type': 'application/json',
            }
        })

        if (!data.ok)
            throw new Error('Failed to create online payment')
        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }
}