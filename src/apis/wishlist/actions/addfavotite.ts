"use server";

import { getTokenFn } from "../../../../utilities/getToken";

export async function addFavorite(productId: string) {
  const token = await getTokenFn();

  if (!token) {
    return {
      success: false,
      message: "Need To SignIn",
    };
  }

  try {
    const data = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        method: "POST",
        body: JSON.stringify({ productId }),
        headers: {
          token,
          "Content-Type": "application/json",
        },
      }
    );

    if (!data.ok) {
      return {
        success: false,
        message: data.statusText,
      };
    }

    const response = await data.json();

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Unexpected error",
    };
  }
}