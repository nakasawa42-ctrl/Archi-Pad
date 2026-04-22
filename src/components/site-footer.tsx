import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getOfficialXProfileUrl } from "@/lib/social";

export function SiteFooter() {
  const xUrl = getOfficialXProfileUrl();

  return (
    <footer className="mt-auto border-t-2 border-stone-300/80 bg-gradient-to-b from-white to-stone-50/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-stone-600">
          <span className="font-semibold text-stone-800">現場ノート【公式】</span>
          <br className="sm:hidden" />
          <span className="text-stone-500">
            {" "}
            実加工・電動工具は説明書と安全装備を確認のうえ行ってください。
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-stone-700">
          <Link href="/" className="hover:text-orange-700 hover:underline">
            トップ
          </Link>
          <span className="text-stone-300">|</span>
          <Link href="/#preface" className="hover:text-orange-700 hover:underline">
            はじめに
          </Link>
          <span className="text-stone-300">|</span>
          <Link href="/ideas" className="hover:text-orange-700 hover:underline">
            掲示板
          </Link>
          <span className="text-stone-300">|</span>
          <Link href="/contributors" className="hover:text-orange-700 hover:underline">
            貢献者
          </Link>
          <span className="text-stone-300">|</span>
          <Link
            href="/contact/rights"
            className="font-semibold hover:text-orange-700 hover:underline"
          >
            権利・IP
          </Link>
          <span className="text-stone-300">|</span>
          <Link
            href="/contact/manufacturer"
            className="hover:text-orange-700 hover:underline"
          >
            メーカー窓口
          </Link>
          <span className="text-stone-300">|</span>
          <Link
            href="/contact/enterprise"
            className="hover:text-orange-700 hover:underline"
          >
            企業窓口
          </Link>
          <span className="text-stone-300">|</span>
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-stone-900 hover:text-orange-700 hover:underline"
          >
            𝕏 公式
            <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
          </a>
          <span className="text-stone-300">|</span>
          <a
            href="https://www.amazon.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-700 hover:underline"
          >
            Amazon（参考）
          </a>
        </div>
      </div>
    </footer>
  );
}
