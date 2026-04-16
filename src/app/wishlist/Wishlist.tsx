import React from "react";
import Product from "../_Components/Product/Product";
import Link from "next/link";
import { getWishlist } from "@/apis/wishlist/getwishlist";
import ProductItem from "../_Components/ProductItem/ProductItem";

export default async function Wishlist() {
  const wishlist = await getWishlist();

  return (
    <>
      {wishlist.length > 0 ? (
        <>
          <div className="min-h-screen bg-gray-50/50">
            <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white py-10">
              <div className="container mx-auto px-4 py-10 sm:py-14">
                <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
                  <Link className="hover:text-white transition-colors" href="/">
                    Home
                  </Link>
                  <span className="text-white/40">/</span>
                  <span className="text-white font-medium">All Wishlist</span>
                </nav>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                    <svg
                      width={30}
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8406 1.5C10.9875 1.5 10.1844 1.90937 9.68437 2.6L8.60938 4.0875C8.46875 4.28125 8.24375 4.39687 8.00313 4.39687C7.7625 4.39687 7.5375 4.28125 7.39687 4.0875L6.32188 2.6C5.82188 1.90937 5.01875 1.5 4.16563 1.5C2.69688 1.5 1.50625 2.69063 1.50625 4.15938C1.50625 5.71875 2.50625 7.23438 3.63438 8.60625C4.91875 10.1687 6.49062 11.5438 7.56875 12.3656C7.66875 12.4406 7.81563 12.4969 8.00625 12.4969C8.19688 12.4969 8.34375 12.4406 8.44375 12.3656C9.52188 11.5438 11.0938 10.1656 12.3781 8.60625C13.5094 7.23438 14.5063 5.71875 14.5063 4.15938C14.5063 2.69063 13.3156 1.5 11.8469 1.5H11.8406ZM8.46875 1.72187C9.25 0.640625 10.5062 0 11.8406 0C14.1375 0 16 1.8625 16 4.15938C16 6.30313 14.6594 8.1875 13.5281 9.55937C12.15 11.2344 10.4875 12.6875 9.34688 13.5562C8.9625 13.85 8.4875 13.9969 8 13.9969C7.5125 13.9969 7.0375 13.85 6.65312 13.5562C5.5125 12.6875 3.85 11.2344 2.47187 9.5625C1.34062 8.19063 0 6.30313 0 4.15938C0 1.8625 1.8625 0 4.15938 0C5.49375 0 6.75 0.640625 7.53125 1.72187L8 2.36875L8.46875 1.72187Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                      All Wishlist
                    </h1>
                    <p className="text-white/80 mt-1">
                      Explore Your Wishlist Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-4 py-8">
              <div className="mb-6 text-sm text-gray-500">
                Showing {wishlist?.length} wishlist
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {wishlist?.map((product) => (
                  <ProductItem
                    key={product._id}
                    product={product}
                    isFavorite={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen bg-gray-50/50">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-sm mx-auto text-center">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <svg
                    width={30}
                    data-prefix="far"
                    data-icon="heart"
                    className="svg-inline--fa fa-heart text-3xl text-gray-400"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Your wishlist is empty
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Browse products and save your favorites here.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                    href="/shop"
                  >
                    Browse Products
                    <svg
                      width={15}
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right text-sm"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
