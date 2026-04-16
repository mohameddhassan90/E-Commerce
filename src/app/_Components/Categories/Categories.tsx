import { getCategories } from "@/apis/category/categories.api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section id="categories" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
          <div className="flex  items-center gap-3 my-8">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Shop By <span className="text-emerald-600">Category</span>
            </h2>
          </div>{" "}
          <Link
            className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer"
            href={`/categories`}
          >
            View All Categories
            <svg
            className="mx-3"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7063 6.70859C16.0969 6.31797 16.0969 5.68359 15.7063 5.29297L10.7063 0.292969C10.3156 -0.0976562 9.68125 -0.0976562 9.29062 0.292969C8.9 0.683594 8.9 1.31797 9.29062 1.70859L12.5844 5.00234H1C0.446875 5.00234 0 5.44922 0 6.00234C0 6.55547 0.446875 7.00234 1 7.00234H12.5844L9.29062 10.2961C8.9 10.6867 8.9 11.3211 9.29062 11.7117C9.68125 12.1023 10.3156 12.1023 10.7063 11.7117L15.7063 6.71172V6.70859Z"
                fill="#16A34A"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories?.map((category) => <Link key={category?._id}
            className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
            href={`/categories/${category?._id}`}
          >
            <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
              <Image
                alt="Music"
                loading="lazy"
                width={300}
                height={300}
                decoding="async"
                data-nimg={1}
                className="w-full h-full object-cover"
                src={category?.image}
                style={{ color: "transparent" }}
              />
            </div>
            <h3 className="font-medium">{category?.name}</h3>
          </Link>)}
          
        </div>
      </div>
    </section>
  );
}
