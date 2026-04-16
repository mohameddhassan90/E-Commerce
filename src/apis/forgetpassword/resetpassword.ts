"use server"
export async function resetPassword(formData: { email: string, newPassword: string }) {
    try {
        const data = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!data?.ok) {
            const errorData = await data.json().catch(() => null);
            throw new Error(errorData?.message || "Failed to reset password");
        }
        const response = await data?.json()
        return response
    } catch (error: any) {
        throw new Error(error?.message)
    }

}