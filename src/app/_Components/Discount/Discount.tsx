interface DiscountProps {
  originalPrice: number; // السعر الأصلي
  currentPrice: number;  // السعر بعد الخصم
}

export default function Discount({ originalPrice, currentPrice }: DiscountProps) {
  if (originalPrice <= 0) return null; // حماية من القسمة على صفر

  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  if (discount <= 0) return null; // لو مفيش خصم، لا يظهر شيء

  return <span>{discount}% OFF</span>;
}