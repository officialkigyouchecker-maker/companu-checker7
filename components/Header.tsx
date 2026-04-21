import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">✓</span>
          <span className="font-bold text-gray-800 group-hover:text-primary-500 transition-colors">
            企業チェッカー
          </span>
        </Link>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
          β版
        </span>
      </div>
    </header>
  );
}
