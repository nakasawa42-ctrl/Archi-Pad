import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EnterpriseContactForm } from "@/components/enterprise-contact-form";
import {
  buildEnterprisePrefillFromSearchParams,
  parseEnterpriseInquiryFromSearchParams,
} from "@/lib/enterprise-prefill";
import type { EnterpriseInquiryMeta } from "@/lib/enterprise-inquiry-meta";

export const metadata: Metadata = {
  title: "権利買取・独占ライセンスのご相談",
  description:
    "企業様向け：アーキパッド上の知恵・投稿の知的財産権の買取、独占・非独占ライセンスに関する専用窓口。",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RightsContactPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const prefilledIdeaReference = buildEnterprisePrefillFromSearchParams(sp);
  const raw = parseEnterpriseInquiryFromSearchParams(sp);
  const inquiryMeta: EnterpriseInquiryMeta = {
    ...raw,
    inquiryChannel: raw.inquiryChannel ?? "rights",
  };

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-1.5 font-semibold text-orange-700 hover:text-orange-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            掲示板へ
          </Link>
          <span className="text-stone-300">|</span>
          <Link href="/contact/manufacturer" className="font-semibold text-stone-600 hover:text-stone-900">
            メーカー窓口
          </Link>
        </nav>

        <header className="mb-8 rounded-2xl border border-stone-800 bg-stone-900 px-5 py-6 text-white shadow-lg sm:px-8 sm:py-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400/90">
            IP · Rights acquisition
          </p>
          <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
            このアイデア・ノウハウの権利を取得したい企業様
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-200">
            買取（アサイメント）・独占／非独占ライセンス・実施料条件など、法務と投稿者両面の調整を運営が仲介します。まずは必須項目を送信し、折り返しで詳細を伺います。
          </p>
        </header>

        <EnterpriseContactForm
          prefilledIdeaReference={prefilledIdeaReference}
          inquiryMeta={inquiryMeta}
          audience="rights"
        />
      </main>
      <SiteFooter />
    </>
  );
}
