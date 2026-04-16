"use client";
import { ProductInterFace } from "@/interfaces/product.interface";
import Link from "next/link";
import React, { useState } from "react";
import Rating from "../Rating/Rating";
import Discount from "../Discount/Discount";
import Image from "next/image";
import ButtonCom from "../ButtonCom";
import { toast } from "sonner";
import Loading from "../Loading/Loading";
import { removeFavorite } from "@/apis/wishlist/actions/removefavorite";
import { addFavorite } from "@/apis/wishlist/actions/addfavotite";
import { useQueryClient } from "@tanstack/react-query";

export default function ProductItem({
  product,
  isFavorite = false, 
}: {
  product: ProductInterFace;
  isFavorite?: boolean; 
}) {
  const [isFav, setIsFav] = useState(isFavorite);
  const [loadingFav, setLoadingFav] = useState(false);
  
  const queryClient =useQueryClient()
  async function handleAddFavorite() {
    try {
      setLoadingFav(true);
      const response = await addFavorite(product?._id);
      setIsFav(true);
      toast.success(response?.message, {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] })
    } catch (error: any) {
      toast.error(error, {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    } finally {
      setLoadingFav(false);
    }
  }
  async function handleRemoveFavorite() {
    try {
      setLoadingFav(true);
      const response = await removeFavorite(product?._id);
      setIsFav(false);
      toast.success(response?.message, {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] })
    } catch (error: any) {
      toast.error(error, {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    } finally {
      setLoadingFav(false);
    }
  }

  return (
    <div
      id="product-card"
      className="bg-white border border-gray-200 rounded-lg overflow-hidden duration-400 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative">
        {/* img */}
        <Image
          width={500}
          height={500}
          className="w-full h-60 object-contain bg-white"
          src={product?.imageCover}
          alt={product?.title}
        />
        {product?.priceAfterDiscount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -
              <Discount
                originalPrice={product?.price}
                currentPrice={product?.priceAfterDiscount}
              />
            </span>
          </div>
        )}

        {/* tabs */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {/* favorite button */}
          {isFav?<button
            onClick={handleRemoveFavorite}
            className="cursor-pointer bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-red-500 hover:text-red-600"
            title="Remove from wishlist"
            tabIndex={0}
          >
            {loadingFav?<Loading></Loading>:<svg
              width={16}
              data-prefix="fas"
              data-icon="heart"
              className="svg-inline--fa fa-heart"
              role="img"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
              />
            </svg>}
          </button>:<button
            onClick={handleAddFavorite}
            className="bg-white cursor-pointer h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
            title="Add to wishlist"
            tabIndex={0}
          >
            {loadingFav ? (
              <Loading></Loading>
            ) : (
              <svg
                width={16}
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8406 1.5C10.9875 1.5 10.1844 1.90937 9.68437 2.6L8.60938 4.0875C8.46875 4.28125 8.24375 4.39687 8.00313 4.39687C7.7625 4.39687 7.5375 4.28125 7.39687 4.0875L6.32188 2.6C5.82188 1.90937 5.01875 1.5 4.16563 1.5C2.69688 1.5 1.50625 2.69063 1.50625 4.15938C1.50625 5.71875 2.50625 7.23438 3.63438 8.60625C4.91875 10.1687 6.49062 11.5438 7.56875 12.3656C7.66875 12.4406 7.81563 12.4969 8.00625 12.4969C8.19688 12.4969 8.34375 12.4406 8.44375 12.3656C9.52188 11.5438 11.0938 10.1656 12.3781 8.60625C13.5094 7.23438 14.5063 5.71875 14.5063 4.15938C14.5063 2.69063 13.3156 1.5 11.8469 1.5H11.8406ZM8.46875 1.72187C9.25 0.640625 10.5062 0 11.8406 0C14.1375 0 16 1.8625 16 4.15938C16 6.30313 14.6594 8.1875 13.5281 9.55937C12.15 11.2344 10.4875 12.6875 9.34688 13.5562C8.9625 13.85 8.4875 13.9969 8 13.9969C7.5125 13.9969 7.0375 13.85 6.65312 13.5562C5.5125 12.6875 3.85 11.2344 2.47187 9.5625C1.34062 8.19063 0 6.30313 0 4.15938C0 1.8625 1.8625 0 4.15938 0C5.49375 0 6.75 0.640625 7.53125 1.72187L8 2.36875L8.46875 1.72187Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>}
          

          {/*  */}
          <button className="bg-white cursor-pointer h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.05944 7.14062C2.47507 4.23438 4.97819 2 8.00007 2C9.65632 2 11.1563 2.67188 12.2438 3.75625C12.2501 3.7625 12.2563 3.76875 12.2626 3.775L12.5001 4H11.0032C10.4501 4 10.0032 4.44688 10.0032 5C10.0032 5.55312 10.4501 6 11.0032 6H15.0032C15.5563 6 16.0032 5.55312 16.0032 5V1C16.0032 0.446875 15.5563 0 15.0032 0C14.4501 0 14.0032 0.446875 14.0032 1V2.66875L13.6501 2.33437C12.2032 0.89375 10.2032 0 8.00007 0C3.96882 0 0.634442 2.98125 0.081317 6.85938C0.00319204 7.40625 0.381317 7.9125 0.928192 7.99062C1.47507 8.06875 1.98132 7.6875 2.05944 7.14375V7.14062ZM15.9188 9.14062C15.9969 8.59375 15.6157 8.0875 15.0719 8.00937C14.5282 7.93125 14.0188 8.3125 13.9407 8.85625C13.5251 11.7625 11.0219 13.9969 8.00007 13.9969C6.34382 13.9969 4.84382 13.325 3.75632 12.2406C3.75007 12.2344 3.74382 12.2281 3.73757 12.2219L3.50007 11.9969H4.99694C5.55007 11.9969 5.99694 11.55 5.99694 10.9969C5.99694 10.4437 5.55007 9.99687 4.99694 9.99687L1.00007 10C0.734442 10 0.478192 10.1062 0.290692 10.2969C0.103192 10.4875 -0.00305795 10.7406 6.70465e-05 11.0094L0.031317 14.9781C0.034442 15.5312 0.487567 15.975 1.04069 15.9688C1.59382 15.9625 2.03757 15.5125 2.03132 14.9594L2.01882 13.35L2.35319 13.6656C3.80007 15.1062 5.79694 16 8.00007 16C12.0313 16 15.3657 13.0188 15.9188 9.14062Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <Link
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
            href={`/productdetailes/${product?.id}`}
          >
            <svg
              width={18}
              height={14}
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00234 1.5C6.96484 1.5 5.28984 2.425 4.00547 3.61562C2.80234 4.73438 1.97109 6.0625 1.54609 7C1.97109 7.9375 2.80234 9.26562 4.00547 10.3844C5.28984 11.575 6.96484 12.5 9.00234 12.5C11.0398 12.5 12.7148 11.575 13.9992 10.3844C15.2023 9.26562 16.0336 7.9375 16.4586 7C16.0336 6.0625 15.2023 4.73438 13.9992 3.61562C12.7148 2.425 11.0398 1.5 9.00234 1.5ZM2.98359 2.51875C4.45547 1.15 6.47734 0 9.00234 0C11.5273 0 13.5492 1.15 15.0211 2.51875C16.4836 3.87812 17.4617 5.5 17.9273 6.61562C18.0305 6.8625 18.0305 7.1375 17.9273 7.38437C17.4617 8.5 16.4836 10.125 15.0211 11.4812C13.5492 12.8469 11.5273 14 9.00234 14C6.47734 14 4.45547 12.85 2.98359 11.4812C1.52109 10.1219 0.542969 8.5 0.0773437 7.38437C-0.0257813 7.1375 -0.0257813 6.8625 0.0773437 6.61562C0.542969 5.5 1.52109 3.875 2.98359 2.51875ZM9.00234 9.5C10.3836 9.5 11.5023 8.38125 11.5023 7C11.5023 6.075 10.9992 5.26562 10.2523 4.83437C10.2086 6.7 8.70234 8.20625 6.83672 8.25C7.26797 8.99687 8.07734 9.5 9.00234 9.5ZM6.51484 6.7375C6.59297 6.74688 6.67109 6.75 6.75234 6.75C7.85547 6.75 8.75234 5.85313 8.75234 4.75C8.75234 4.66875 8.74609 4.59062 8.73984 4.5125C7.57109 4.63437 6.63984 5.56563 6.51797 6.73438L6.51484 6.7375ZM7.93984 3.14375C8.27734 3.05 8.63359 3.00313 8.99922 3.00313C9.27422 3.00313 9.54609 3.03125 9.80547 3.08437C9.81484 3.0875 9.82109 3.0875 9.83047 3.09062C11.6398 3.47187 12.9992 5.08125 12.9992 7.00313C12.9992 9.2125 11.2086 11.0031 8.99922 11.0031C7.07422 11.0031 5.46797 9.64375 5.08672 7.83438C5.03047 7.56563 4.99922 7.2875 4.99922 7.00313C4.99922 6.65938 5.04297 6.32188 5.12422 6.00313C5.13047 5.98125 5.13359 5.9625 5.13984 5.94375C5.51172 4.5875 6.58047 3.51875 7.93672 3.14687L7.93984 3.14375Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">
          {product?.category?.name}
        </div>
        <h3 className="font-medium mb-1 cursor-pointer " title={product?.title}>
          {/* product detailes*/}
          <Link
            className="line-clamp-2"
            href={`/productdetailes/${product?.id}`}
          >
            {product?.title}
          </Link>
        </h3>
        {/* stars  */}
        <div className="flex items-center my-2">
          <Rating rate={product?.ratingsAverage} size={3} />
          <span className="mx-3">Rate {product?.ratingsAverage}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product?.priceAfterDiscount ? (
              <div className="flex gap-5">
                <span className="text-lg font-bold text-[#16A34A]">
                  {product?.priceAfterDiscount} EGP
                </span>
                <span className="text-lg font-medium line-through text-[#6A7282]">
                  {product?.price} EGP
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800">
                {product?.price} EGP
              </span>
            )}
          </div>
          {/* add Button */}

          <ButtonCom
            id={product?._id}
            cls="cursor-pointer h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70"
          >
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1C8 0.446875 7.55312 0 7 0C6.44688 0 6 0.446875 6 1V6H1C0.446875 6 0 6.44688 0 7C0 7.55312 0.446875 8 1 8H6V13C6 13.5531 6.44688 14 7 14C7.55312 14 8 13.5531 8 13V8H13C13.5531 8 14 7.55312 14 7C14 6.44688 13.5531 6 13 6H8V1Z"
                fill="white"
              />
            </svg>
          </ButtonCom>
        </div>
      </div>
    </div>
  );
}
