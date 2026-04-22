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
  title: "メーカー・製品化・導入のご相談",
  description:
    "メーカー担当者向け：現場ノート上の知恵の量産化・OEM・現場導入の専用窓口。運営仲介のもと、投稿者と適切に接続します。",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ManufacturerContactPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const prefilledIdeaReference = buildEnterprisePrefillFromSearchParams(sp);
  const raw = parseEnterpriseInquiryFromSearchParams(sp);
  const inquiryMeta: EnterpriseInquiryMeta = {
    ...raw,
    inquiryChannel: raw.inquiryChannel ?? "manufacturer",
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
          <Link href="/contact/enterprise" className="font-semibold text-stone-600 hover:text-stone-900">
            企業総合窓口へ
          </Link>
        </nav>

        <header className="mb-8 border-b border-amber-200/80 pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-900/80">
            For manufacturers
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            メーカー担当者様：製品化・導入のご相談
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            治具・金物・消耗材・教材化など、現場発の知恵を規格やカタログに載せたい場合はこちらから。運営が投稿者（職人）側との意思疎通・条件整理をサポートする設計です（仲介ワークフローは管理画面でチケット化予定）。
          </p>
        </header>

        <EnterpriseContactForm
          prefilledIdeaReference={prefilledIdeaReference}
          inquiryMeta={inquiryMeta}
          audience="manufacturer"
        />
      </main>
      <SiteFooter />
    </>
  );
}
