import { ProductInterFace } from "@/interfaces/product.interface";

export async function getSingleProduct(id: string) :Promise<ProductInterFace> {
    try {
        const response = await fetch(`${process.env.API}products/${id}`);
    if(!response.ok) {
        throw new Error(response?.statusText);
    }
    const products = await response.json();
    return products?.data;
    } catch (error:any) {
        throw new Error(error?.message)
    }
}