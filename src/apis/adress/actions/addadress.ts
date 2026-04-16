"use server"
import { formData } from "@/app/profile/ProfileAdress";
import { toast } from "sonner";
import { getTokenFn } from "../../../../utilities/getToken";


export async function addAdress(formData: formData) {
    const token = await getTokenFn()
    console.log("token", token);

    if (!token)
        throw new Error("Need To SignIn")
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                token: token,
                "Content-Type": "application/json"
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