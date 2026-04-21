import { Company } from "@/lib/types";
import StarRating from "./StarRating";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <article className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* ヘッダー */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-50">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {company.name}
            </h2>
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
              {company.industry}
            </span>
          </div>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="px-5 py-4 space-y-4">
        {/* 一言特徴 */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 mb-1.5 flex items-center gap-1">
            <span>💡</span> 一言で言うと
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {company.feature}
          </p>
        </div>

        {/* 向いている人 */}
        <div className="p-3 bg-mint-50 rounded-2xl">
          <h3 className="text-xs font-semibold text-mint-500 mb-1.5 flex items-center gap-1">
            <span>✓</span> 向いている人
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {company.suitableFor}
          </p>
        </div>

        {/* 注意点 */}
        <div className="p-3 bg-orange-50 rounded-2xl">
          <h3 className="text-xs font-semibold text-orange-400 mb-1.5 flex items-center gap-1">
            <span>⚠</span> 知っておくべきこと
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {company.caution}
          </p>
        </div>
      </div>

      {/* レーティング */}
      <div className="px-5 py-4 bg-gray-50 space-y-3">
        <StarRating rating={company.popularityRating} label="就活人気度" />
        <StarRating rating={company.growthRating} label="成長環境" />
      </div>
    </article>
  );
}
