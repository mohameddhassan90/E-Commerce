FreshCart 🛒
A modern, full-featured e-commerce web application built with Next.js 16 and React 19. Browse products, manage your cart and wishlist, and complete purchases — all in a fast, responsive interface.
🔗 Live Demo: e-commerce-one-gamma-70.vercel.app

✨ Features

🏠 Home Page — Hero slider, featured products, and category grid
🛍️ Shop & Browse — Filter by category or brand, with discount badges and ratings
📦 Product Details — Full product info with images
🛒 Shopping Cart — Add, remove, and update quantities
❤️ Wishlist — Save products for later
🔐 Authentication — Register, sign in, and protected routes via NextAuth
👤 Profile & Orders — View order history and manage your account
🌙 Theme Support — Light/dark mode via next-themes


🛠️ Tech Stack
LayerTechnologyFrameworkNext.js 16 (App Router)UI LibraryReact 19LanguageTypeScriptStylingTailwind CSS v4Componentsshadcn/ui + Radix UIData FetchingTanStack React Query v5TablesTanStack TableFormsReact Hook Form + ZodAuthNextAuth v4 + jwt-decodeSliderSwiperNotificationsSonnerDeploymentVercel

🚀 Getting Started
Prerequisites

Node.js 18+
npm / yarn / pnpm

Installation
bash# 1. Clone the repo
git clone https://github.com/mohameddhassan90/E-Commerce.git
cd E-Commerce

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables section below)

# 4. Run the development server
npm run dev
Open http://localhost:3000 to view it in the browser.

⚙️ Environment Variables
Create a .env.local file in the root directory:
envNEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

📁 Project Structure
├── src/
│   ├── app/           # Next.js App Router pages & layouts
│   ├── components/    # Reusable UI components
│   │   └── ui/        # shadcn/ui primitives
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utilities and helpers
├── types/             # Global TypeScript type definitions
├── utilities/         # Shared utility functions
├── public/            # Static assets
└── next.config.ts     # Next.js configuration

📜 Available Scripts
bashnpm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint

🌐 API
This project consumes the Route Academy E-Commerce API:

Base URL: https://ecommerce.routemisr.com
Covers: products, categories, brands, cart, wishlist, orders, and auth


📸 Screenshots

(Add screenshots of your Home, Shop, and Product pages here)


🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.Share