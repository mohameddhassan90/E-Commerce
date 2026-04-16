"use server"
import { NewPasswordInterface } from "@/interfaces/newpassword.interface";
import { getTokenFn } from "../../../utilities/getToken";
import { toast } from "sonner";


export async function ChangePassword(newPassword: NewPasswordInterface) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")

    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`, {
            method: "PUT",
            body: JSON.stringify(newPassword),
            headers: {
                token: token,
                "Content-Type": "application/json"
            }
        })

        if (!data?.ok) {
            throw new Error(data?.statusText);
        }

        const respone = await data.json()
        return respone
    } catch (error: any) {
        throw new Error(error?.message)
    }
}