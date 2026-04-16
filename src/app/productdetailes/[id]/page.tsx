import { getSingleProduct } from "@/apis/singleproduct.api";
import ButtonCom from "@/app/_Components/ButtonCom";
import Discount from "@/app/_Components/Discount/Discount";
import MainImageSlider from "@/app/_Components/MainImageSlider/MainImageSlider";
import NavIcon from "@/app/_Components/NavIcon/NavIcon";
import Rating from "@/app/_Components/Rating/Rating";
import MySlider from "@/app/_Components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data = await getSingleProduct(id);

  
  return (
    <>
      <nav aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href={`/`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.50872 0.200391C6.22044 -0.0667969 5.77512 -0.0667969 5.48919 0.200391L0.239186 5.07539C0.014186 5.28633 -0.060814 5.61211 0.051686 5.89805C0.164186 6.18398 0.438405 6.37383 0.74778 6.37383H1.12278V10.4988C1.12278 11.3262 1.79544 11.9988 2.62278 11.9988H9.37278C10.2001 11.9988 10.8728 11.3262 10.8728 10.4988V6.37383H11.2478C11.5572 6.37383 11.8337 6.18398 11.9462 5.89805C12.0587 5.61211 11.9837 5.28398 11.7587 5.07539L6.50872 0.200391ZM5.62278 7.49883H6.37278C6.99387 7.49883 7.49778 8.00274 7.49778 8.62383V10.8738H4.49778V8.62383C4.49778 8.00274 5.00169 7.49883 5.62278 7.49883Z"
                    fill="#6A7282"
                  />
                </svg>
                Home
              </Link>
              <svg
                className="mx-3"
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78145 4.72207C6.07441 5.01504 6.07441 5.49082 5.78145 5.78379L1.28145 10.2838C0.988476 10.5768 0.512695 10.5768 0.219727 10.2838C-0.0732422 9.99082 -0.0732422 9.51504 0.219727 9.22207L4.19004 5.25176L0.22207 1.28145C-0.0708985 0.988477 -0.0708985 0.512695 0.22207 0.219727C0.515039 -0.0732422 0.99082 -0.0732422 1.28379 0.219727L5.78379 4.71973L5.78145 4.72207Z"
                  fill="#99A1AF"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href="/categories/6439d5b90049ad0b52b90048"
              >
                {data?.category?.name}
              </Link>
              <svg
                className="mx-3"
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78145 4.72207C6.07441 5.01504 6.07441 5.49082 5.78145 5.78379L1.28145 10.2838C0.988476 10.5768 0.512695 10.5768 0.219727 10.2838C-0.0732422 9.99082 -0.0732422 9.51504 0.219727 9.22207L4.19004 5.25176L0.22207 1.28145C-0.0708985 0.988477 -0.0708985 0.512695 0.22207 0.219727C0.515039 -0.0732422 0.99082 -0.0732422 1.28379 0.219727L5.78379 4.71973L5.78145 4.72207Z"
                  fill="#99A1AF"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-primary-600 transition flex items-center gap-1.5"
                href="/categories/6439d5b90049ad0b52b90048/6407f243b575d3b90bf957ac"
              >
                {data?.subcategory[0]?.name}
              </Link>
              <svg
                className="mx-3"
                width="6"
                height="11"
                viewBox="0 0 6 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78145 4.72207C6.07441 5.01504 6.07441 5.49082 5.78145 5.78379L1.28145 10.2838C0.988476 10.5768 0.512695 10.5768 0.219727 10.2838C-0.0732422 9.99082 -0.0732422 9.51504 0.219727 9.22207L4.19004 5.25176L0.22207 1.28145C-0.0708985 0.988477 -0.0708985 0.512695 0.22207 0.219727C0.515039 -0.0732422 0.99082 -0.0732422 1.28379 0.219727L5.78379 4.71973L5.78145 4.72207Z"
                  fill="#99A1AF"
                />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {data?.title}
            </li>
          </ol>
        </div>
      </nav>
      <section className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4 bg-white rounded-xl shadow-sm top-4 pt-4 sticky h-fit overflow-hidden">
              {/* images */}
              <div className="image-content">
                {/* main image */}
                <MainImageSlider data={data}></MainImageSlider>
              </div>
            </div>

            <div id="product-info" className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* categories ..............*/}
                  <a
                    className="bg-green-100 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                    href="/categories/6439d58a0049ad0b52b9003f"
                  >
                    {data?.category?.name}
                  </a>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {data?.brand?.name}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {data?.title}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <Rating rate={data?.ratingsAverage} size={3} />
                  <span className="mx-3">
                    Rate {data?.ratingsAverage}({data?.ratingsQuantity}{" "}
                    reviewes)
                  </span>
                </div>
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  {data?.priceAfterDiscount ? (
                    <div className="flex gap-5">
                      <span className="text-lg font-bold text-[#16A34A]">
                        {data?.price} EGP
                      </span>
                      <span className="text-lg font-medium line-through text-[#6A7282]">
                        {data?.price} EGP
                      </span>
                      {data?.priceAfterDiscount && (
                        <>
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -
                            <Discount
                              originalPrice={data?.price}
                              currentPrice={data?.priceAfterDiscount}
                            />
                          </span>
                        </>
                      )}
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-gray-800">
                      {data?.price} EGP
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-6">
                  {data?.quantity > 0 ? (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      In Stock
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Out Stock
                    </span>
                  )}
                </div>
                <div className="border-t border-gray-100 pt-5 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {data?.description}
                  </p>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                      <button
                        id="decrease-qty"
                        className="px-4 py-3 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-600 transition disabled:opacity-50"
                        disabled
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.446875 0.446875 0 1 0H13C13.5531 0 14 0.446875 14 1C14 1.55313 13.5531 2 13 2H1C0.446875 2 0 1.55313 0 1Z"
                            fill="#4A5565"
                          />
                        </svg>
                      </button>
                      <input
                        min={1}
                        max={data?.quantity}
                        className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                        id="quantity"
                        type="number"
                        defaultValue={1}
                      />
                      <button
                        id="increase-qty"
                        className="px-4 py-3 cursor-pointer text-gray-600 hover:bg-green-100 hover:text-green-600 transition disabled:opacity-50"
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
                            fill="#4A5565"
                          />
                        </svg>
                      </button>
                    </div>
                    {data?.quantity > 0 ? (
                      <span className="text-sm text-gray-500">
                        {" "}
                        {data?.quantity} available
                      </span>
                    ) : (
                      <span className="text-sm text-gray-500">
                        {" "}
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {data?.price}.00 EGP
                    </span>
                  </div>
                </div>
                {/* buttons buy && add */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  {/*  add button */}
                  <ButtonCom  id={data?._id} cls="flex-1 cursor-pointer text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 bg-green-600">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 0C0.334375 0 0 0.334375 0 0.75C0 1.16562 0.334375 1.5 0.75 1.5H2.16563C2.2875 1.5 2.39062 1.5875 2.4125 1.70625L4.04063 10.6531C4.23438 11.7219 5.16563 12.5 6.25313 12.5H14.25C14.6656 12.5 15 12.1656 15 11.75C15 11.3344 14.6656 11 14.25 11H6.25313C5.89062 11 5.58125 10.7406 5.51562 10.3844L5.35625 9.5H14.8438C15.8062 9.5 16.6313 8.81563 16.8094 7.86875L17.7781 2.68438C17.8938 2.06875 17.4219 1.5 16.7938 1.5H3.89687L3.88438 1.4375C3.73438 0.60625 3.00937 0 2.1625 0H0.75ZM6.5 16.5C6.89782 16.5 7.27936 16.342 7.56066 16.0607C7.84196 15.7794 8 15.3978 8 15C8 14.6022 7.84196 14.2206 7.56066 13.9393C7.27936 13.658 6.89782 13.5 6.5 13.5C6.10218 13.5 5.72064 13.658 5.43934 13.9393C5.15804 14.2206 5 14.6022 5 15C5 15.3978 5.15804 15.7794 5.43934 16.0607C5.72064 16.342 6.10218 16.5 6.5 16.5ZM13.5 16.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15C15 14.6022 14.842 14.2206 14.5607 13.9393C14.2794 13.658 13.8978 13.5 13.5 13.5C13.1022 13.5 12.7206 13.658 12.4393 13.9393C12.158 14.2206 12 14.6022 12 15C12 15.3978 12.158 15.7794 12.4393 16.0607C12.7206 16.342 13.1022 16.5 13.5 16.5Z"
                        fill="white"
                      />
                    </svg>
                    Add to Cart
                  </ButtonCom>
                  {/*  */}

                  <button
                    id="buy-now"
                    className="flex-1 cursor-pointer bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <svg
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5878 0.191152C10.9597 0.459902 11.0972 0.947402 10.9285 1.3724L8.47847 7.50053H13.0003C13.4222 7.50053 13.7972 7.76303 13.941 8.1599C14.0847 8.55678 13.9628 9.00053 13.641 9.26928L4.64097 16.7693C4.28784 17.063 3.78472 17.0787 3.41284 16.8099C3.04097 16.5412 2.90347 16.0537 3.07222 15.6287L5.52222 9.50053H1.00034C0.578466 9.50053 0.203466 9.23803 0.0597157 8.84115C-0.0840343 8.44428 0.0378407 8.00053 0.359716 7.73178L9.35972 0.231777C9.71284 -0.0619728 10.216 -0.0775978 10.5878 0.191152Z"
                        fill="white"
                      />
                    </svg>
                    Buy Now
                  </button>
                </div>
                <div className="flex gap-3 mb-6">
                  <button
                    id="wishlist-button"
                    className="flex-1 cursor-pointer border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600"
                  >
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8406 1.5C10.9875 1.5 10.1844 1.90937 9.68437 2.6L8.60938 4.0875C8.46875 4.28125 8.24375 4.39687 8.00313 4.39687C7.7625 4.39687 7.5375 4.28125 7.39687 4.0875L6.32188 2.6C5.82188 1.90937 5.01875 1.5 4.16563 1.5C2.69688 1.5 1.50625 2.69063 1.50625 4.15938C1.50625 5.71875 2.50625 7.23438 3.63438 8.60625C4.91875 10.1687 6.49062 11.5438 7.56875 12.3656C7.66875 12.4406 7.81563 12.4969 8.00625 12.4969C8.19688 12.4969 8.34375 12.4406 8.44375 12.3656C9.52188 11.5438 11.0938 10.1656 12.3781 8.60625C13.5094 7.23438 14.5063 5.71875 14.5063 4.15938C14.5063 2.69063 13.3156 1.5 11.8469 1.5H11.8406ZM8.46875 1.72187C9.25 0.640625 10.5062 0 11.8406 0C14.1375 0 16 1.8625 16 4.15938C16 6.30313 14.6594 8.1875 13.5281 9.55937C12.15 11.2344 10.4875 12.6875 9.34688 13.5562C8.9625 13.85 8.4875 13.9969 8 13.9969C7.5125 13.9969 7.0375 13.85 6.65312 13.5562C5.5125 12.6875 3.85 11.2344 2.47187 9.5625C1.34062 8.19063 0 6.30313 0 4.15938C0 1.8625 1.8625 0 4.15938 0C5.49375 0 6.75 0.640625 7.53125 1.72187L8 2.36875L8.46875 1.72187Z"
                        fill="#364153"
                      />
                    </svg>
                    Add to Wishlist
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition">
                    <svg
                      data-prefix="fas"
                      data-icon="share-nodes"
                      className="svg-inline--fa fa-share-nodes"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="15"
                          viewBox="0 0 20 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2C2 0.896875 2.89687 0 4 0H13C14.1031 0 15 0.896875 15 2V3H16.5844C17.1156 3 17.625 3.20937 18 3.58437L19.4156 5C19.7906 5.375 20 5.88438 20 6.41563V11C20 12.1031 19.1031 13 18 13H17.8969C17.5719 14.1531 16.5094 15 15.25 15C13.9906 15 12.9312 14.1531 12.6031 13H9.39688C9.07188 14.1531 8.00937 15 6.75 15C5.49062 15 4.43125 14.1531 4.10313 13H4C2.89687 13 2 12.1031 2 11V9.5H0.75C0.334375 9.5 0 9.16562 0 8.75C0 8.33438 0.334375 8 0.75 8H4.25C4.66563 8 5 7.66563 5 7.25C5 6.83437 4.66563 6.5 4.25 6.5H0.75C0.334375 6.5 0 6.16563 0 5.75C0 5.33437 0.334375 5 0.75 5H6.25C6.66563 5 7 4.66563 7 4.25C7 3.83437 6.66563 3.5 6.25 3.5H0.75C0.334375 3.5 0 3.16563 0 2.75C0 2.33437 0.334375 2 0.75 2H2ZM18 8V6.41563L16.5844 5H15V8H18ZM8 12.25C8 11.9185 7.8683 11.6005 7.63388 11.3661C7.39946 11.1317 7.08152 11 6.75 11C6.41848 11 6.10054 11.1317 5.86612 11.3661C5.6317 11.6005 5.5 11.9185 5.5 12.25C5.5 12.5815 5.6317 12.8995 5.86612 13.1339C6.10054 13.3683 6.41848 13.5 6.75 13.5C7.08152 13.5 7.39946 13.3683 7.63388 13.1339C7.8683 12.8995 8 12.5815 8 12.25ZM15.25 13.5C15.5815 13.5 15.8995 13.3683 16.1339 13.1339C16.3683 12.8995 16.5 12.5815 16.5 12.25C16.5 11.9185 16.3683 11.6005 16.1339 11.3661C15.8995 11.1317 15.5815 11 15.25 11C14.9185 11 14.6005 11.1317 14.3661 11.3661C14.1317 11.6005 14 11.9185 14 12.25C14 12.5815 14.1317 12.8995 14.3661 13.1339C14.6005 13.3683 14.9185 13.5 15.25 13.5Z"
                            fill="#16A34A"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Free Delivery
                        </h4>
                        <p className="text-xs text-gray-500">Orders over $50</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="15"
                          viewBox="0 0 20 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2C2 0.896875 2.89687 0 4 0H13C14.1031 0 15 0.896875 15 2V3H16.5844C17.1156 3 17.625 3.20937 18 3.58437L19.4156 5C19.7906 5.375 20 5.88438 20 6.41563V11C20 12.1031 19.1031 13 18 13H17.8969C17.5719 14.1531 16.5094 15 15.25 15C13.9906 15 12.9312 14.1531 12.6031 13H9.39688C9.07188 14.1531 8.00937 15 6.75 15C5.49062 15 4.43125 14.1531 4.10313 13H4C2.89687 13 2 12.1031 2 11V9.5H0.75C0.334375 9.5 0 9.16562 0 8.75C0 8.33438 0.334375 8 0.75 8H4.25C4.66563 8 5 7.66563 5 7.25C5 6.83437 4.66563 6.5 4.25 6.5H0.75C0.334375 6.5 0 6.16563 0 5.75C0 5.33437 0.334375 5 0.75 5H6.25C6.66563 5 7 4.66563 7 4.25C7 3.83437 6.66563 3.5 6.25 3.5H0.75C0.334375 3.5 0 3.16563 0 2.75C0 2.33437 0.334375 2 0.75 2H2ZM18 8V6.41563L16.5844 5H15V8H18ZM8 12.25C8 11.9185 7.8683 11.6005 7.63388 11.3661C7.39946 11.1317 7.08152 11 6.75 11C6.41848 11 6.10054 11.1317 5.86612 11.3661C5.6317 11.6005 5.5 11.9185 5.5 12.25C5.5 12.5815 5.6317 12.8995 5.86612 13.1339C6.10054 13.3683 6.41848 13.5 6.75 13.5C7.08152 13.5 7.39946 13.3683 7.63388 13.1339C7.8683 12.8995 8 12.5815 8 12.25ZM15.25 13.5C15.5815 13.5 15.8995 13.3683 16.1339 13.1339C16.3683 12.8995 16.5 12.5815 16.5 12.25C16.5 11.9185 16.3683 11.6005 16.1339 11.3661C15.8995 11.1317 15.5815 11 15.25 11C14.9185 11 14.6005 11.1317 14.3661 11.3661C14.1317 11.6005 14 11.9185 14 12.25C14 12.5815 14.1317 12.8995 14.3661 13.1339C14.6005 13.3683 14.9185 13.5 15.25 13.5Z"
                            fill="#16A34A"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          30 Days Return
                        </h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          width="20"
                          height="15"
                          viewBox="0 0 20 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2C2 0.896875 2.89687 0 4 0H13C14.1031 0 15 0.896875 15 2V3H16.5844C17.1156 3 17.625 3.20937 18 3.58437L19.4156 5C19.7906 5.375 20 5.88438 20 6.41563V11C20 12.1031 19.1031 13 18 13H17.8969C17.5719 14.1531 16.5094 15 15.25 15C13.9906 15 12.9312 14.1531 12.6031 13H9.39688C9.07188 14.1531 8.00937 15 6.75 15C5.49062 15 4.43125 14.1531 4.10313 13H4C2.89687 13 2 12.1031 2 11V9.5H0.75C0.334375 9.5 0 9.16562 0 8.75C0 8.33438 0.334375 8 0.75 8H4.25C4.66563 8 5 7.66563 5 7.25C5 6.83437 4.66563 6.5 4.25 6.5H0.75C0.334375 6.5 0 6.16563 0 5.75C0 5.33437 0.334375 5 0.75 5H6.25C6.66563 5 7 4.66563 7 4.25C7 3.83437 6.66563 3.5 6.25 3.5H0.75C0.334375 3.5 0 3.16563 0 2.75C0 2.33437 0.334375 2 0.75 2H2ZM18 8V6.41563L16.5844 5H15V8H18ZM8 12.25C8 11.9185 7.8683 11.6005 7.63388 11.3661C7.39946 11.1317 7.08152 11 6.75 11C6.41848 11 6.10054 11.1317 5.86612 11.3661C5.6317 11.6005 5.5 11.9185 5.5 12.25C5.5 12.5815 5.6317 12.8995 5.86612 13.1339C6.10054 13.3683 6.41848 13.5 6.75 13.5C7.08152 13.5 7.39946 13.3683 7.63388 13.1339C7.8683 12.8995 8 12.5815 8 12.25ZM15.25 13.5C15.5815 13.5 15.8995 13.3683 16.1339 13.1339C16.3683 12.8995 16.5 12.5815 16.5 12.25C16.5 11.9185 16.3683 11.6005 16.1339 11.3661C15.8995 11.1317 15.5815 11 15.25 11C14.9185 11 14.6005 11.1317 14.3661 11.3661C14.1317 11.6005 14 11.9185 14 12.25C14 12.5815 14.1317 12.8995 14.3661 13.1339C14.6005 13.3683 14.9185 13.5 15.25 13.5Z"
                            fill="#16A34A"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Secure Payment
                        </h4>
                        <p className="text-xs text-gray-500">100% Protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NavIcon></NavIcon>
    </>
  );
}
