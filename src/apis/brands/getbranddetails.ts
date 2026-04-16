export async function getBrandDetails(id:string){
     try {
        const response = await fetch(`${process.env.API}brands/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch brandDetails');
        }
        const brandDetails = await response.json();
        return brandDetails?.data
    } catch (error:any) {
        throw new Error(error?.message)
    }

}