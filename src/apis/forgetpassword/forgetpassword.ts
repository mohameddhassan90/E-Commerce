"use server"
export async function forgetPassword(email:{email:string}){
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
            method:"POST",
            body:JSON.stringify(email),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(!data?.ok)
            throw new Error (data?.statusText)
        const response = await data?.json()
        return response
    } catch (error:any) {
        throw new Error(error?.message)
        
    }
    
}