export async function getCategoryDetails(id: string) {
    try {
        const data = await fetch(`${process.env.API}categories/${id}`);
        if (!data.ok) {
            throw new Error(data?.statusText);
        }
        const response = await data.json();
        return response?.data
    } catch (error: any) {
        throw new Error(error?.message)
    }
}