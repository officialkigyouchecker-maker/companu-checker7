interface StarRatingProps {
  rating: number;
  label: string;
}

export default function StarRating({ rating, label }: StarRatingProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= rating ? "text-yellow-400" : "text-gray-200"
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-1 text-sm font-semibold text-gray-600">
          {rating}.0
        </span>
      </div>
    </div>
  );
}
