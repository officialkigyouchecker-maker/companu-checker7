import { Suspense } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CompanyCard from "@/components/CompanyCard";
import companies from "@/data/companies.json";
import { Company } from "@/lib/types";

function SearchResults({ query }: { query: string }) {
  const normalizedQuery = query.toLowerCase().trim();

  const results = (companies as Company[]).filter(
    (company) =>
      company.name.toLowerCase().includes(normalizedQuery) ||
      company.industry.toLowerCase().includes(normalizedQuery)
  );

  if (!query) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-gray-500">企業名を入力して検索してください</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-16 animate-fadeIn">
        <div className="text-6xl mb-4">😢</div>
        <p className="text-gray-600 font-medium mb-2">
          「{query}」の検索結果がありません
        </p>
        <p className="text-gray-400 text-sm">
          別のキーワードで検索してみてください
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold text-primary-600">{results.length}</span>{" "}
        件の企業が見つかりました
      </p>
      {results.map((company) => (
        <CompanyCard key={company.name} company={company} />
      ))}
    </div>
  );
}

function SearchContent({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q || "";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50/30">
      <Header />

      {/* 検索セクション */}
      <section className="px-5 pt-6 pb-4">
        <div className="max-w-lg mx-auto">
          <SearchBar initialValue={query} />
        </div>
      </section>

      {/* 結果セクション */}
      <section className="px-5 pb-16">
        <div className="max-w-lg mx-auto">
          <SearchResults query={query} />
        </div>
      </section>
    </main>
  );
}

export default async function SearchPage(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gradient-to-b from-white to-primary-50/30">
          <Header />
          <section className="px-5 pt-6">
            <div className="max-w-lg mx-auto">
              <div className="h-12 bg-gray-100 rounded-2xl animate-pulse" />
            </div>
          </section>
        </main>
      }
    >
      <SearchContent searchParams={searchParams} />
    </Suspense>
  );
}
