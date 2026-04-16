export interface CategoryInterface {
    image: string;
    name: string;
    _id: string;
}
export async function getCategories(): Promise<CategoryInterface[]> {
    try {
        const data = await fetch(`${process.env.API}categories`);
        if (!data.ok) {
            throw new Error(data?.statusText);
        }

        const response = await data.json();
        return response?.data;
    } catch (error: any) {
        throw new Error(error?.message)
    }
}