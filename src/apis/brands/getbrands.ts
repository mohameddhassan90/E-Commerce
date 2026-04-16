export async function getBrands() {
    try {
        const response = await fetch(`${process.env.API}brands`);
        if (!response.ok) {
            throw new Error('Failed to fetch brands');
        }
        const brands = await response.json();
        return brands?.data
    } catch (error:any) {
        throw new Error(error?.message)
    }
}