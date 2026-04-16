"use server"
import { RegisterSchemaType } from '../app/(auth)/signup/schema/schema.register';
export async function signUp(data: RegisterSchemaType) {
    try {
        const response = await fetch(`${process.env.API}auth/signup`, {
            method: `POST`,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!response.ok)
            throw new Error(response?.statusText);
        return response.ok

    } catch (error: any) {
        throw new Error(error?.message);
    }

}