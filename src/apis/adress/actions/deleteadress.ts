"use server"
import { toast } from "sonner";
import { getTokenFn } from "../../../../utilities/getToken";

export async function deleteAdress(adressId: string) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${adressId}`, {
            method: "DELETE",
            headers: {
                token: token,
            }
        })

        if (!data?.ok) {
            const errorBody = await data.json();
            throw new Error(errorBody?.message || data?.statusText);
        }

        const response = await data.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)

    }

}