import { Star, StarHalf, Star as StarOutline } from "lucide-react";

interface RatingProps {
  rate: number;
  max?: number;
  size?: number; // Tailwind size: 5 يعني w-5 h-5
}

export default function Rating({ rate, max = 5, size = 5 }: RatingProps) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (rate >= i) {
      // نجمة كاملة
      stars.push(
        <Star
          key={i}
          className={`w-${size} h-${size} text-yellow-400 fill-yellow-400`}
        />
      );
    } else if (rate >= i - 0.5) {
      // نصف نجمة
      stars.push(
        <StarHalf
          key={i}
          className={`w-${size} h-${size} text-yellow-400 fill-yellow-400`}
        />
      );
    } else {
      // نجمة فارغة
      stars.push(
        <StarOutline
          key={i}
          className={`w-${size} h-${size} text-gray-300`}
        />
      );
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}