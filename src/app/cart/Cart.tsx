"use client";
import React from "react";
import Product from "../_Components/Product/Product";
import Link from "next/link";
import NavIcon from "../_Components/NavIcon/NavIcon";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productType } from "@/interfaces/cart.interface";
import { deleteFromCart } from "@/apis/cart/actions/deletefromcart.actions";
import Loading from "../_Components/Loading/Loading";
import { toast } from "sonner";
import { updatecountitem } from "@/apis/cart/actions/updatecountitem.actions";
import { clearCart } from "@/apis/cart/actions/clearcart.actions";
import Modal from "../_Components/Modal/Modal";

export default function Cart() {
  
  const { data: cartData } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await fetch("/api/cart");
      if (!response?.ok) throw new Error("unauthorized");
      return response?.json();
    },
  });

  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const queryClient = useQueryClient();

  // delete from cart
  const {
    data: deleteData,
    mutate: deleteMutate,
    isPending: deletePending,
  } = useMutation({
    mutationFn: deleteFromCart,
    onMutate: (id: string) => {
      setDeletingId(id);
    },

    onSuccess: () => {
      toast.success("Item deleted from cart", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: any) => {
      toast.error(error.message, {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    },
  });

  //  update count in cart
  const {
    data: updateData,
    mutate: updateMutate,
    isPending: updatePending,
  } = useMutation({
    mutationFn: updatecountitem,

    onSuccess: () => {
      toast.success("Item count updated", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: any) => {
      toast.error(error.message, {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    },
  });

  function handleMutatecount(productId: string, count: number) {
    updateMutate({ productId, count });
  }

  // clear all cart

  const {
    data: clearData,
    mutate: clearMutate,
    isPending: clearPending,
  } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      toast.success("Cart cleared successfully", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error: any) => {
      toast.error(error.message, {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    },
  });

  function generateSKU(id: string) {
    return `SKU: ${id.slice(-6).toUpperCase()}`;
  }

  if (!cartData?.numOfCartItems)
    return (
      <>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                <svg
                  width={70}
                  height={70}
                  data-prefix="fas"
                  data-icon="box-open"
                  className="svg-inline--fa fa-box-open text-5xl text-gray-300"
                  role="img"
                  viewBox="0 0 640 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven't added anything to your cart yet.
              <br />
              Start exploring our products!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]"
              href="/"
            >
              Start Shopping
              <svg
               width={16}
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
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Electronics
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Fashion
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Home
                </Link>
                <Link
                  className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                  href="/categories"
                >
                  Beauty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <a className="hover:text-green-600 transition" href="/">
                Home
              </a>
              <span>/</span>
              <span className="text-gray-900 font-medium">Shopping Cart</span>
            </nav>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={48}
                        height={48}
                        rx={12}
                        fill="url(#paint0_linear_38_3218)"
                      />
                      <path
                        d="M6.65625 8.0625C5.87695 8.0625 5.25 8.68945 5.25 9.46875C5.25 10.248 5.87695 10.875 6.65625 10.875H9.31055C9.53906 10.875 9.73242 11.0391 9.77344 11.2617L12.8262 28.0371C13.1895 30.041 14.9355 31.5 16.9746 31.5H31.9688C32.748 31.5 33.375 30.873 33.375 30.0938C33.375 29.3145 32.748 28.6875 31.9688 28.6875H16.9746C16.2949 28.6875 15.7148 28.2012 15.5918 27.5332L15.293 25.875H33.082C34.8867 25.875 36.4336 24.5918 36.7676 22.8164L38.584 13.0957C38.8008 11.9414 37.916 10.875 36.7383 10.875H12.5566L12.5332 10.7578C12.252 9.19922 10.8926 8.0625 9.30469 8.0625H6.65625ZM17.4375 39C18.1834 39 18.8988 38.7037 19.4262 38.1762C19.9537 37.6488 20.25 36.9334 20.25 36.1875C20.25 35.4416 19.9537 34.7262 19.4262 34.1988C18.8988 33.6713 18.1834 33.375 17.4375 33.375C16.6916 33.375 15.9762 33.6713 15.4488 34.1988C14.9213 34.7262 14.625 35.4416 14.625 36.1875C14.625 36.9334 14.9213 37.6488 15.4488 38.1762C15.9762 38.7037 16.6916 39 17.4375 39ZM30.5625 39C31.3084 39 32.0238 38.7037 32.5512 38.1762C33.0787 37.6488 33.375 36.9334 33.375 36.1875C33.375 35.4416 33.0787 34.7262 32.5512 34.1988C32.0238 33.6713 31.3084 33.375 30.5625 33.375C29.8166 33.375 29.1012 33.6713 28.5738 34.1988C28.0463 34.7262 27.75 35.4416 27.75 36.1875C27.75 36.9334 28.0463 37.6488 28.5738 38.1762C29.1012 38.7037 29.8166 39 30.5625 39Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_38_3218"
                          x1={0}
                          y1={24}
                          x2={48}
                          y2={24}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#16A34A" />
                          <stop offset={1} stopColor="#15803D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  Shopping Cart
                </h1>
                <p className="text-gray-500 mt-2">
                  You have{" "}
                  <span className="font-semibold text-green-600">
                    {cartData?.numOfCartItems} item
                  </span>{" "}
                  in your cart
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* maping */}
              {cartData?.data?.products?.map((product: productType) => {
                return (
                  <div key={product?._id} className="space-y-4 mb-8">
                    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
                      <div className="p-4 sm:p-5">
                        <div className="flex gap-4 sm:gap-6">
                          <Link
                            className="relative shrink-0 group"
                            href={`productdetailes/${product?.product?._id}`}
                          >
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                              <img
                                alt={product?.product?.title}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                src={product?.product?.imageCover}
                              />
                            </div>
                            <div
                              className={`absolute -bottom-1 -right-1 ${product?.product?.quantity >= 1 ? "bg-green-500" : "bg-red-500"} text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1`}
                            >
                              <svg
                                width={7}
                                height={7}
                                viewBox="0 0 7 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.79336 0.0970684C7.0168 0.259568 7.0668 0.572069 6.9043 0.795506L2.9043 6.29551C2.81836 6.41426 2.68555 6.48769 2.53867 6.50019C2.3918 6.51269 2.24961 6.45801 2.14648 6.35488L0.146484 4.35488C-0.0488281 4.15957 -0.0488281 3.84238 0.146484 3.64707C0.341797 3.45176 0.658984 3.45176 0.854297 3.64707L2.44023 5.23301L6.09648 0.206443C6.25898 -0.0169941 6.57148 -0.066994 6.79492 0.095506L6.79336 0.0970684Z"
                                  fill="white"
                                />
                              </svg>
                              {product?.product?.quantity >= 1
                                ? "In Stock:"
                                : "Out of Stock"}
                            </div>
                          </Link>

                          <div className="flex-1 min-w-0 flex flex-col">
                            <div className="mb-3">
                              <a
                                className="group/title"
                                href="/products/6428e7ecdc1175abc65ca090"
                              >
                                <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">
                                  {product?.product?.title}
                                </h3>
                              </a>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="inline-block px-2.5 py-1 bg-linear-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full">
                                  {product?.product?.category?.name}
                                </span>
                                <span className="text-xs text-gray-400">•</span>
                                <span className="text-xs text-gray-500">
                                  {generateSKU(product?.product._id)}
                                </span>
                              </div>
                            </div>
                            <div className="mb-4">
                              <div className="flex items-baseline gap-2">
                                <span className="text-green-600 font-bold text-lg">
                                  {product?.price} EGP
                                </span>
                                <span className="text-xs text-gray-400">
                                  per unit
                                </span>
                              </div>
                            </div>
                            <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                              <div className="flex items-center">
                                <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                                  {/* decrease */}
                                  <button
                                    onClick={() => {
                                      handleMutatecount(
                                        product?.product?._id,
                                        product?.count - 1,
                                      );
                                    }}
                                    className="cursor-pointer h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all"
                                    aria-label="Decrease quantity"
                                    disabled={
                                      product?.count <= 1 || updatePending
                                    }
                                  >
                                    <svg
                                      width={11}
                                      height={2}
                                      viewBox="0 0 11 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 0.75C0 0.335156 0.335156 0 0.75 0H9.75C10.1648 0 10.5 0.335156 10.5 0.75C10.5 1.16484 10.1648 1.5 9.75 1.5H0.75C0.335156 1.5 0 1.16484 0 0.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </button>
                                  {/* count */}
                                  <span className="w-12 text-center font-bold text-gray-900">
                                    {product?.count}
                                  </span>
                                  {/* increase */}
                                  <button
                                    onClick={() => {
                                      handleMutatecount(
                                        product?.product?._id,
                                        product?.count + 1,
                                      );
                                    }}
                                    className="cursor-pointer h-8 w-8 rounded-lg bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                                    aria-label="Increase quantity"
                                    disabled={
                                      product?.count >=
                                        product?.product?.quantity ||
                                      updatePending
                                    }
                                  >
                                    <svg
                                      width={11}
                                      height={11}
                                      viewBox="0 0 11 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 0.75C6 0.335156 5.66484 0 5.25 0C4.83516 0 4.5 0.335156 4.5 0.75V4.5H0.75C0.335156 4.5 0 4.83516 0 5.25C0 5.66484 0.335156 6 0.75 6H4.5V9.75C4.5 10.1648 4.83516 10.5 5.25 10.5C5.66484 10.5 6 10.1648 6 9.75V6H9.75C10.1648 6 10.5 5.66484 10.5 5.25C10.5 4.83516 10.1648 4.5 9.75 4.5H6V0.75Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="text-right">
                                  <p className="text-xs text-gray-400 mb-0.5">
                                    Total
                                  </p>
                                  <p className="text-xl font-bold text-gray-900">
                                    {product?.count * product?.price}{" "}
                                    <span className="text-sm font-medium text-gray-400">
                                      EGP
                                    </span>
                                  </p>
                                </div>
                                {/* delete */}
                                <button
                                  onClick={() => {
                                    deleteMutate(product?.product?._id);
                                  }}
                                  disabled={
                                    deletingId === product?.product?._id
                                  }
                                  className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200 cursor-pointer"
                                  title="Remove item"
                                  aria-label="Remove from cart"
                                >
                                  <svg
                                    width={13}
                                    height={15}
                                    viewBox="0 0 13 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.73789 0.598828L3.5 1.3125H0.875C0.391016 1.3125 0 1.70352 0 2.1875C0 2.67148 0.391016 3.0625 0.875 3.0625H11.375C11.859 3.0625 12.25 2.67148 12.25 2.1875C12.25 1.70352 11.859 1.3125 11.375 1.3125H8.75L8.51211 0.598828C8.3918 0.240625 8.0582 0 7.68086 0H4.56914C4.1918 0 3.8582 0.240625 3.73789 0.598828ZM11.375 4.375H0.875L1.45195 13.2098C1.4957 13.9016 2.06992 14.4375 2.76172 14.4375H9.48828C10.1801 14.4375 10.7543 13.9016 10.798 13.2098L11.375 4.375Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <Link
                  className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2"
                  href="/"
                >
                  <span>←</span> Continue Shopping
                </Link>
                {/* delete all  */}
                <div className="group cursor-pointer flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50">
                  <svg
                    width={13}
                    height={15}
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.73789 0.598828L3.5 1.3125H0.875C0.391016 1.3125 0 1.70352 0 2.1875C0 2.67148 0.391016 3.0625 0.875 3.0625H11.375C11.859 3.0625 12.25 2.67148 12.25 2.1875C12.25 1.70352 11.859 1.3125 11.375 1.3125H8.75L8.51211 0.598828C8.3918 0.240625 8.0582 0 7.68086 0H4.56914C4.1918 0 3.8582 0.240625 3.73789 0.598828ZM11.375 4.375H0.875L1.45195 13.2098C1.4957 13.9016 2.06992 14.4375 2.76172 14.4375H9.48828C10.1801 14.4375 10.7543 13.9016 10.798 13.2098L11.375 4.375Z"
                      fill="currentColor"
                    />
                  </svg>
                  <Modal
                    clickevent={clearMutate}
                    buttonName="Clear All Cart"
                    title={"Clear Your Cart?"}
                    description={
                      "All items will be removed from your cart. This action cannot be undone."
                    }
                  ></Modal>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <svg
                      width={16}
                      height={18}
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.625 3.9375C5.625 2.69648 6.63398 1.6875 7.875 1.6875C9.11602 1.6875 10.125 2.69648 10.125 3.9375V5.625H5.625V3.9375ZM3.9375 5.625H1.6875C0.755859 5.625 0 6.38086 0 7.3125V14.625C0 16.4883 1.51172 18 3.375 18H12.375C14.2383 18 15.75 16.4883 15.75 14.625V7.3125C15.75 6.38086 14.9941 5.625 14.0625 5.625H11.8125V3.9375C11.8125 1.76133 10.0512 0 7.875 0C5.69883 0 3.9375 1.76133 3.9375 3.9375V5.625ZM4.78125 7.3125C4.89205 7.3125 5.00177 7.33432 5.10414 7.37673C5.20651 7.41913 5.29952 7.48128 5.37787 7.55963C5.45622 7.63798 5.51837 7.73099 5.56077 7.83336C5.60318 7.93573 5.625 8.04545 5.625 8.15625C5.625 8.26705 5.60318 8.37677 5.56077 8.47914C5.51837 8.58151 5.45622 8.67452 5.37787 8.75287C5.29952 8.83122 5.20651 8.89337 5.10414 8.93577C5.00177 8.97818 4.89205 9 4.78125 9C4.67045 9 4.56073 8.97818 4.45836 8.93577C4.35599 8.89337 4.26298 8.83122 4.18463 8.75287C4.10628 8.67452 4.04413 8.58151 4.00173 8.47914C3.95932 8.37677 3.9375 8.26705 3.9375 8.15625C3.9375 8.04545 3.95932 7.93573 4.00173 7.83336C4.04413 7.73099 4.10628 7.63798 4.18463 7.55963C4.26298 7.48128 4.35599 7.41913 4.45836 7.37673C4.56073 7.33432 4.67045 7.3125 4.78125 7.3125ZM10.125 8.15625C10.125 7.93247 10.2139 7.71786 10.3721 7.55963C10.5304 7.40139 10.745 7.3125 10.9688 7.3125C11.1925 7.3125 11.4071 7.40139 11.5654 7.55963C11.7236 7.71786 11.8125 7.93247 11.8125 8.15625C11.8125 8.38003 11.7236 8.59464 11.5654 8.75287C11.4071 8.91111 11.1925 9 10.9688 9C10.745 9 10.5304 8.91111 10.3721 8.75287C10.2139 8.59464 10.125 8.38003 10.125 8.15625Z"
                        fill="white"
                      />
                    </svg>
                    Order Summary
                  </h2>
                  <p className="text-green-100 text-sm mt-1">
                    {cartData?.numOfCartItems} item in your cart
                  </p>
                </div>
                <div className="p-6 space-y-5">
                  {cartData?.data?.totalCartPrice < 500 ? (
                    <>
                      <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            width={18}
                            height={15}
                            viewBox="0 0 18 15"
                            fill="none"
                            className="text-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 2C0 0.896875 0.896875 0 2 0H11C12.1031 0 13 0.896875 13 2V3H14.5844C15.1156 3 15.625 3.20937 16 3.58437L17.4156 5C17.7906 5.375 18 5.88438 18 6.41563V11C18 12.1031 17.1031 13 16 13H15.8969C15.5719 14.1531 14.5094 15 13.25 15C11.9906 15 10.9312 14.1531 10.6031 13H7.39687C7.07188 14.1531 6.00938 15 4.75 15C3.49062 15 2.43125 14.1531 2.10313 13H2C0.896875 13 0 12.1031 0 11V2ZM16 8V6.41563L14.5844 5H13V8H16ZM6 12.25C6 11.9185 5.8683 11.6005 5.63388 11.3661C5.39946 11.1317 5.08152 11 4.75 11C4.41848 11 4.10054 11.1317 3.86612 11.3661C3.6317 11.6005 3.5 11.9185 3.5 12.25C3.5 12.5815 3.6317 12.8995 3.86612 13.1339C4.10054 13.3683 4.41848 13.5 4.75 13.5C5.08152 13.5 5.39946 13.3683 5.63388 13.1339C5.8683 12.8995 6 12.5815 6 12.25ZM13.25 13.5C13.5815 13.5 13.8995 13.3683 14.1339 13.1339C14.3683 12.8995 14.5 12.5815 14.5 12.25C14.5 11.9185 14.3683 11.6005 14.1339 11.3661C13.8995 11.1317 13.5815 11 13.25 11C12.9185 11 12.6005 11.1317 12.3661 11.3661C12.1317 11.6005 12 11.9185 12 12.25C12 12.5815 12.1317 12.8995 12.3661 13.1339C12.6005 13.3683 12.9185 13.5 13.25 13.5Z"
                              fill="currentColor"
                            />
                          </svg>

                          <span className="text-sm font-medium text-gray-700">
                            Add {500 - cartData?.data?.totalCartPrice} EGP for
                            free shipping
                          </span>
                        </div>
                        <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                            style={{
                              width: `${(cartData?.data?.totalCartPrice / 500) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-linear-to-r from-green-50 to-green-50 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className=" bg-green-100 p-2 rounded-full">
                            <svg
                              width={18}
                              height={15}
                              viewBox="0 0 18 15"
                              fill="none"
                              className="text-green-600 "
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 2C0 0.896875 0.896875 0 2 0H11C12.1031 0 13 0.896875 13 2V3H14.5844C15.1156 3 15.625 3.20937 16 3.58437L17.4156 5C17.7906 5.375 18 5.88438 18 6.41563V11C18 12.1031 17.1031 13 16 13H15.8969C15.5719 14.1531 14.5094 15 13.25 15C11.9906 15 10.9312 14.1531 10.6031 13H7.39687C7.07188 14.1531 6.00938 15 4.75 15C3.49062 15 2.43125 14.1531 2.10313 13H2C0.896875 13 0 12.1031 0 11V2ZM16 8V6.41563L14.5844 5H13V8H16ZM6 12.25C6 11.9185 5.8683 11.6005 5.63388 11.3661C5.39946 11.1317 5.08152 11 4.75 11C4.41848 11 4.10054 11.1317 3.86612 11.3661C3.6317 11.6005 3.5 11.9185 3.5 12.25C3.5 12.5815 3.6317 12.8995 3.86612 13.1339C4.10054 13.3683 4.41848 13.5 4.75 13.5C5.08152 13.5 5.39946 13.3683 5.63388 13.1339C5.8683 12.8995 6 12.5815 6 12.25ZM13.25 13.5C13.5815 13.5 13.8995 13.3683 14.1339 13.1339C14.3683 12.8995 14.5 12.5815 14.5 12.25C14.5 11.9185 14.3683 11.6005 14.1339 11.3661C13.8995 11.1317 13.5815 11 13.25 11C12.9185 11 12.6005 11.1317 12.3661 11.3661C12.1317 11.6005 12 11.9185 12 12.25C12 12.5815 12.1317 12.8995 12.3661 13.1339C12.6005 13.3683 12.9185 13.5 13.25 13.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>

                          <div>
                            <p className="font-semibold text-green-700">
                              Free Shipping!
                            </p>
                            <p className="text-sm text-green-600">
                              You qualify for free delivery
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">
                        {cartData?.data?.totalCartPrice} EGP
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-900 font-medium">
                      <span>Shipping</span>
                      <span
                        className={`font-medium ${cartData?.data?.totalCartPrice < 500 ? "text-gray-600" : "text-green-600"} `}
                      >
                        {cartData?.data?.totalCartPrice < 500
                          ? "50 EGP"
                          : "Free"}
                      </span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between items-baseline">
                        <span className="text-gray-900 font-semibold">
                          Total
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-gray-900">
                            {cartData?.data?.totalCartPrice < 500
                              ? cartData?.data?.totalCartPrice + 50
                              : cartData?.data?.totalCartPrice}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            EGP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* promo */}
                  <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                    <svg
                      width={15}
                      height={15}
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2V6.67188C0 7.20312 0.209375 7.7125 0.584375 8.0875L6.58437 14.0875C7.36562 14.8687 8.63125 14.8687 9.4125 14.0875L14.0844 9.41562C14.8656 8.63437 14.8656 7.36875 14.0844 6.5875L8.08438 0.5875C7.70938 0.209375 7.20312 0 6.67188 0H2C0.896875 0 0 0.896875 0 2ZM3.5 2.5C3.76522 2.5 4.01957 2.60536 4.20711 2.79289C4.39464 2.98043 4.5 3.23478 4.5 3.5C4.5 3.76522 4.39464 4.01957 4.20711 4.20711C4.01957 4.39464 3.76522 4.5 3.5 4.5C3.23478 4.5 2.98043 4.39464 2.79289 4.20711C2.60536 4.01957 2.5 3.76522 2.5 3.5C2.5 3.23478 2.60536 2.98043 2.79289 2.79289C2.98043 2.60536 3.23478 2.5 3.5 2.5Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span className="text-sm font-medium">
                      Apply Promo Code
                    </span>
                  </button>
                  <Link
                    className="w-full cursor-pointer bg-linear-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                    href={`/checkout/${cartData?.cartId}`}
                  >
                    <svg
                      width={12}
                      height={17}
                      viewBox="0 0 12 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4V6H8V4C8 2.89687 7.10313 2 6 2C4.89687 2 4 2.89687 4 4ZM2 6V4C2 1.79063 3.79063 0 6 0C8.20938 0 10 1.79063 10 4V6C11.1031 6 12 6.89687 12 8V15C12 16.1031 11.1031 17 10 17H2C0.896875 17 0 16.1031 0 15V8C0 6.89687 0.896875 6 2 6Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span>Secure Checkout</span>
                  </Link>
                  <div className="flex items-center justify-center gap-4 py-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.62267 0C5.73048 0 5.83829 0.0234375 5.93673 0.0679688L10.3524 1.94063C10.868 2.15859 11.2524 2.66719 11.25 3.28125C11.2383 5.60625 10.282 9.86016 6.24376 11.7938C5.85235 11.9813 5.39767 11.9813 5.00626 11.7938C0.965636 9.86016 0.0117294 5.60625 1.06605e-05 3.28125C-0.00233309 2.66719 0.382042 2.15859 0.897667 1.94063L5.31095 0.0679688C5.40939 0.0234375 5.51485 0 5.62267 0ZM5.62267 1.56563V10.4273C8.85704 8.86172 9.72657 5.39297 9.74767 3.31641L5.62267 1.56797V1.56563Z"
                          fill="#00C950"
                        />
                      </svg>

                      <span>Secure Payment</span>
                    </div>
                    <div className="w-px h-4 bg-gray-200" />
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 1.5C0 0.672656 0.672656 0 1.5 0H8.25C9.07734 0 9.75 0.672656 9.75 1.5V2.25H10.9383C11.3367 2.25 11.7188 2.40703 12 2.68828L13.0617 3.75C13.343 4.03125 13.5 4.41328 13.5 4.81172V8.25C13.5 9.07734 12.8273 9.75 12 9.75H11.9227C11.6789 10.6148 10.882 11.25 9.9375 11.25C8.99297 11.25 8.19844 10.6148 7.95234 9.75H5.54766C5.30391 10.6148 4.50703 11.25 3.5625 11.25C2.61797 11.25 1.82344 10.6148 1.57734 9.75H1.5C0.672656 9.75 0 9.07734 0 8.25V1.5ZM12 6V4.81172L10.9383 3.75H9.75V6H12ZM4.5 9.1875C4.5 8.93886 4.40123 8.7004 4.22541 8.52459C4.0496 8.34877 3.81114 8.25 3.5625 8.25C3.31386 8.25 3.0754 8.34877 2.89959 8.52459C2.72377 8.7004 2.625 8.93886 2.625 9.1875C2.625 9.43614 2.72377 9.6746 2.89959 9.85041C3.0754 10.0262 3.31386 10.125 3.5625 10.125C3.81114 10.125 4.0496 10.0262 4.22541 9.85041C4.40123 9.6746 4.5 9.43614 4.5 9.1875ZM9.9375 10.125C10.1861 10.125 10.4246 10.0262 10.6004 9.85041C10.7762 9.6746 10.875 9.43614 10.875 9.1875C10.875 8.93886 10.7762 8.7004 10.6004 8.52459C10.4246 8.34877 10.1861 8.25 9.9375 8.25C9.68886 8.25 9.4504 8.34877 9.27459 8.52459C9.09877 8.7004 9 8.93886 9 9.1875C9 9.43614 9.09877 9.6746 9.27459 9.85041C9.4504 10.0262 9.68886 10.125 9.9375 10.125Z"
                          fill="#2B7FFF"
                        />
                      </svg>
                      <span>Fast Delivery</span>
                    </div>
                  </div>
                  <a
                    className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
                    href="/"
                  >
                    ← Continue Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* icons  */}
      <NavIcon></NavIcon>
    </>
  );
}
