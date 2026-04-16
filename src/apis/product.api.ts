import { ProductInterFace } from "@/interfaces/product.interface";

export async function getProducts(): Promise<ProductInterFace[]> {
    try {
        const response = await fetch(`${process.env.API}products?limit=100`);
        if (!response.ok) {
            throw new Error(response?.statusText);
        }
        const products = await response.json();
        return products?.data;
    } catch (error:any) {
        throw new Error(error?.message)
    }
}