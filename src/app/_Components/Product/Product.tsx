import { getProducts } from "@/apis/product.api";
import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { getWishlist } from "@/apis/wishlist/getwishlist";
import SearchInput from "../SearchInput/SearchInput";

export default async function Product({ search }: { search?: string }) {
  const data = await getProducts();
  const wishlist = await getWishlist();
  const wishlistIds = wishlist?.map((item) => item._id) || [];

  const filteredData = search
    ? data.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : data;

  return (
    <>
      <SearchInput></SearchInput>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredData.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            isFavorite={wishlistIds.includes(product._id)}
          />
        ))}
      </div>
    </>
  );
}
