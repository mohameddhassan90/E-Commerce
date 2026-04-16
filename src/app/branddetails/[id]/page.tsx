import { getBrandDetails } from "@/apis/brands/getbranddetails";
import { getProducts } from "@/apis/product.api";
import ProductItem from "@/app/_Components/ProductItem/ProductItem";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const brandDetails = await getBrandDetails(id);

  const data = await getProducts();
  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {data
          .filter((product) => product?.brand?.name === brandDetails?.name)
          .map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}
