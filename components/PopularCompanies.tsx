import Link from "next/link";

const popularCompanies = [
  { name: "楽天", query: "楽天", emoji: "🏪" },
  { name: "リクルート", query: "リクルート", emoji: "💼" },
  { name: "キーエンス", query: "キーエンス", emoji: "📊" },
  { name: "サイバーエージェント", query: "サイバーエージェント", emoji: "📱" },
  { name: "アクセンチュア", query: "アクセンチュア", emoji: "🎯" },
];

export default function PopularCompanies() {
  return (
    <div className="flex flex-wrap gap-2">
      {popularCompanies.map((company) => (
        <Link
          key={company.query}
          href={`/search?q=${encodeURIComponent(company.query)}`}
          className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-white border border-gray-100 rounded-full text-sm text-gray-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 transition-all duration-200 shadow-sm hover:shadow"
        >
          <span>{company.emoji}</span>
          <span>{company.name}</span>
        </Link>
      ))}
    </div>
  );
}
