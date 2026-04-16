"use server"
import { NewUpdateUserDataInterface } from "@/interfaces/newpassword.interface";
import { getTokenFn } from "../../../utilities/getToken";


export async function updateUserData(formData: NewUpdateUserDataInterface) {
    const token = await getTokenFn()
    if (!token)
        throw new Error("Need To SignIn")

    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                token: token,
                "Content-Type": "application/json"
            }
        })
        
        if (!data.ok) {
            throw new Error(data?.statusText || "Update failed");
        }
        
        const respone = await data.json()
        return respone
    } catch (error: any) {
        throw new Error(error?.message|| "Something went wrong")
    }
}