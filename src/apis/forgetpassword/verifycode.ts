"use server"
export async function verifyCode(resetCode:{resetCode:string}){
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
            method:"POST",
            body:JSON.stringify(resetCode),
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