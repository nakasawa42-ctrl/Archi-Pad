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
  title: "企業様・製品化のご相談",
  description:
    "掲示板の知恵を製品化したい企業様向けの専用連絡窓口。アーキパッド【公式】運営へ。",
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function EnterpriseContactPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const prefilledIdeaReference = buildEnterprisePrefillFromSearchParams(sp);
  const raw = parseEnterpriseInquiryFromSearchParams(sp);
  const inquiryMeta: EnterpriseInquiryMeta = {
    ...raw,
    inquiryChannel: raw.inquiryChannel ?? "enterprise",
  };

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-8">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            掲示板へ
          </Link>
        </nav>

        <header className="mb-8 border-b border-stone-200 pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange-800/80">
            For business
          </p>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
            このアイデアを製品化したい企業はこちら
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            オープン掲示板上の知恵を、規格・治具・教材として形にしたい場合は、専用フォームからご連絡ください。ライセンス・共同開発のすり合わせは個別に対応します。
          </p>
        </header>

        <EnterpriseContactForm
          prefilledIdeaReference={prefilledIdeaReference}
          inquiryMeta={inquiryMeta}
          audience="enterprise"
        />
      </main>
      <SiteFooter />
    </>
  );
}
