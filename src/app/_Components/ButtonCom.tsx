"use client";
import { addToCart } from "@/apis/cart/actions/addtocart.actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { toast } from "sonner";
interface buttonProps {
  children: ReactNode;
  cls: string;
  id: string;
}
export default function ButtonCom({ children, cls, id }: buttonProps) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      toast.success(data?.message || "Product added to cart successfully!", {
        position: "top-center",
        style: { backgroundColor: "#16A34A", color: "#fff" },
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to add product to cart!", {
        position: "top-center",
        style: { backgroundColor: "#DC2626", color: "#fff" },
      });
    },
  });

  async function handleAddToCart() {
    mutate(id);
  }
  return (
    <button disabled={isPending} onClick={handleAddToCart} className={cls}>
      {children}
    </button>
  );
}
