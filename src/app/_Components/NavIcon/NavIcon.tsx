import React from 'react'

export default function NavIcon() {
  return (
    <section className="bg-green-50 ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-green-100 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="23"
                  height="19"
                  viewBox="0 0 23 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.5C0 1.12109 1.12109 0 2.5 0H13.75C15.1289 0 16.25 1.12109 16.25 2.5V3.75H18.2305C18.8945 3.75 19.5312 4.01172 20 4.48047L21.7695 6.25C22.2383 6.71875 22.5 7.35547 22.5 8.01953V13.75C22.5 15.1289 21.3789 16.25 20 16.25H19.8711C19.4648 17.6914 18.1367 18.75 16.5625 18.75C14.9883 18.75 13.6641 17.6914 13.2539 16.25H9.24609C8.83984 17.6914 7.51172 18.75 5.9375 18.75C4.36328 18.75 3.03906 17.6914 2.62891 16.25H2.5C1.12109 16.25 0 15.1289 0 13.75V2.5ZM20 10V8.01953L18.2305 6.25H16.25V10H20ZM7.5 15.3125C7.5 14.8981 7.33538 14.5007 7.04235 14.2076C6.74933 13.9146 6.3519 13.75 5.9375 13.75C5.5231 13.75 5.12567 13.9146 4.83265 14.2076C4.53962 14.5007 4.375 14.8981 4.375 15.3125C4.375 15.7269 4.53962 16.1243 4.83265 16.4174C5.12567 16.7104 5.5231 16.875 5.9375 16.875C6.3519 16.875 6.74933 16.7104 7.04235 16.4174C7.33538 16.1243 7.5 15.7269 7.5 15.3125ZM16.5625 16.875C16.9769 16.875 17.3743 16.7104 17.6674 16.4174C17.9604 16.1243 18.125 15.7269 18.125 15.3125C18.125 14.8981 17.9604 14.5007 17.6674 14.2076C17.3743 13.9146 16.9769 13.75 16.5625 13.75C16.1481 13.75 15.7507 13.9146 15.4576 14.2076C15.1646 14.5007 15 14.8981 15 15.3125C15 15.7269 15.1646 16.1243 15.4576 16.4174C15.7507 16.7104 16.1481 16.875 16.5625 16.875Z"
                    fill="#00BC7D"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Free Shipping
                </h3>
                <p className="text-xs text-gray-500">On orders over 500 EGP</p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-green-100 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.37111 0C9.5508 0 9.73049 0.0390625 9.89455 0.113281L17.2539 3.23438C18.1133 3.59766 18.7539 4.44531 18.75 5.46875C18.7305 9.34375 17.1367 16.4336 10.4063 19.6562C9.75392 19.9688 8.99611 19.9688 8.34377 19.6562C1.60939 16.4336 0.019549 9.34375 1.77675e-05 5.46875C-0.00388848 4.44531 0.636737 3.59766 1.49611 3.23438L8.85158 0.113281C9.01564 0.0390625 9.19142 0 9.37111 0ZM9.37111 2.60938V17.3789C14.7617 14.7695 16.211 8.98828 16.2461 5.52734L9.37111 2.61328V2.60938Z"
                    fill="#00BC7D"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Secure Payment
                </h3>
                <p className="text-xs text-gray-500">
                  100% secure transactions
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-green-100 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C7.78125 2.5 5.78516 3.46484 4.41016 5H6.25C6.94141 5 7.5 5.55859 7.5 6.25C7.5 6.94141 6.94141 7.5 6.25 7.5H1.25C0.558594 7.5 0 6.94141 0 6.25V1.25C0 0.558594 0.558594 0 1.25 0C1.94141 0 2.5 0.558594 2.5 1.25V3.38672C4.33203 1.3125 7.01172 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C6.60156 20 3.59766 18.3047 1.79297 15.7148C1.39844 15.1484 1.53516 14.3711 2.10156 13.9727C2.66797 13.5742 3.44531 13.7148 3.84375 14.2812C5.20312 16.2266 7.45312 17.4961 10 17.4961C14.1406 17.4961 17.5 14.1367 17.5 9.99609C17.5 5.85547 14.1406 2.5 10 2.5Z"
                    fill="#00BC7D"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Easy Returns
                </h3>
                <p className="text-xs text-gray-500">14-day return policy</p>
              </div>
            </div>
            <div
              className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="bg-green-100 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C7.78125 2.5 5.78516 3.46484 4.41016 5H6.25C6.94141 5 7.5 5.55859 7.5 6.25C7.5 6.94141 6.94141 7.5 6.25 7.5H1.25C0.558594 7.5 0 6.94141 0 6.25V1.25C0 0.558594 0.558594 0 1.25 0C1.94141 0 2.5 0.558594 2.5 1.25V3.38672C4.33203 1.3125 7.01172 0 10 0C15.5234 0 20 4.47656 20 10C20 15.5234 15.5234 20 10 20C6.60156 20 3.59766 18.3047 1.79297 15.7148C1.39844 15.1484 1.53516 14.3711 2.10156 13.9727C2.66797 13.5742 3.44531 13.7148 3.84375 14.2812C5.20312 16.2266 7.45312 17.4961 10 17.4961C14.1406 17.4961 17.5 14.1367 17.5 9.99609C17.5 5.85547 14.1406 2.5 10 2.5Z"
                    fill="#00BC7D"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  24/7 Support
                </h3>
                <p className="text-xs text-gray-500">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
