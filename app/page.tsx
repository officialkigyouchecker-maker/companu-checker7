import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PopularCompanies from "@/components/PopularCompanies";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-primary-50/30">
      <Header />

      {/* Hero Section */}
      <section className="px-5 pt-12 pb-8">
        <div className="max-w-lg mx-auto text-center">
          {/* キャッチコピー */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight mb-3">
            届いたスカウト企業、
            <br />
            <span className="text-primary-500">3秒</span>で分析。
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            OfferBox・dodaキャンパス・マイナビ等で
            <br />
            気になった企業をサクッと調べよう
          </p>

          {/* 検索バー */}
          <SearchBar />
        </div>
      </section>

      {/* 人気企業セクション */}
      <section className="px-5 pb-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-gray-200"></span>
            よく検索される企業
            <span className="w-8 h-px bg-gray-200"></span>
          </h2>
          <PopularCompanies />
        </div>
      </section>

      {/* フッター */}
      <footer className="px-5 py-8 border-t border-gray-100">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs text-gray-400">
            © 2024 企業チェッカー
            <br />
            <span className="text-gray-300">就活生のための企業分析サイト</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
