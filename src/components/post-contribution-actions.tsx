"use client";

import Link from "next/link";
import { Building2, Factory, HeartHandshake, Scale } from "lucide-react";
import {
  buildEnterpriseInquiryHref,
  buildManufacturerInquiryHref,
  buildRightsInquiryHref,
} from "@/lib/enterprise-inquiry-link";
import { getContributorBySlug } from "@/data/contributors";
import { getRankFromLevel } from "@/lib/contributor-rank";
import { ContributorRankBadge } from "@/components/contributor-rank-badge";

type ContentKind = "recipe" | "tool" | "idea";

type PostContributionActionsProps = {
  contentType: ContentKind;
  contentSlug: string;
  contentTitle: string;
  /** 表示用（レシピ著者名・掲示板のハンドル名など） */
  contributorLabel: string;
  contributorSlug?: string;
  ideaId?: string;
  /** 掲示板カード向けの一回り小さいレイアウト */
  variant?: "default" | "compact";
};

export function PostContributionActions({
  contentType,
  contentSlug,
  contentTitle,
  contributorLabel,
  contributorSlug,
  ideaId,
  variant = "default",
}: PostContributionActionsProps) {
  const ctx = {
    source: contentType,
    contentSlug: contentType === "idea" ? (ideaId ?? contentSlug) : contentSlug,
    contentTitle,
    ideaId: contentType === "idea" ? ideaId : undefined,
    contributorSlug,
    contributorDisplayName: contributorLabel,
  } as const;

  const rightsHref = buildRightsInquiryHref({
    source: ctx.source,
    contentSlug: ctx.contentSlug,
    contentTitle: ctx.contentTitle,
    ideaId: ctx.ideaId,
    contributorSlug: ctx.contributorSlug,
    contributorDisplayName: ctx.contributorDisplayName,
  });

  const enterpriseHref = buildEnterpriseInquiryHref({
    source: ctx.source,
    contentSlug: ctx.contentSlug,
    contentTitle: ctx.contentTitle,
    ideaId: ctx.ideaId,
    contributorSlug: ctx.contributorSlug,
    contributorDisplayName: ctx.contributorDisplayName,
  });

  const manufacturerHref = buildManufacturerInquiryHref({
    source: ctx.source,
    contentSlug: ctx.contentSlug,
    contentTitle: ctx.contentTitle,
    ideaId: ctx.ideaId,
    contributorSlug: ctx.contributorSlug,
    contributorDisplayName: ctx.contributorDisplayName,
  });

  const profile = contributorSlug ? getContributorBySlug(contributorSlug) : undefined;
  const rank = profile ? getRankFromLevel(profile.level) : null;

  if (variant === "compact") {
    return (
      <div
        className="mt-4 space-y-3 border-t border-stone-200 pt-4"
        aria-label="収益化の窓口"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-stone-500">
          収益化の窓口
        </p>

        <Link
          href={rightsHref}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-3 py-3.5 text-center text-xs font-black leading-snug text-white shadow-lg ring-1 ring-stone-700 transition hover:bg-stone-800"
        >
          <Scale className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
          <span className="text-balance">
            【現場ノート｜企業向け】この知恵の権利買取・ライセンスを相談する
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[11px] font-semibold text-stone-600">投稿者: {contributorLabel}</p>
          {rank ? <ContributorRankBadge rank={rank} size="sm" /> : null}
        </div>

        <Link
          href={manufacturerHref}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-400/90 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-2.5 text-center text-xs font-bold leading-snug text-amber-950 shadow-sm ring-1 ring-amber-200/80 hover:from-amber-100 hover:to-orange-100"
        >
          <Factory className="h-4 w-4 shrink-0 text-amber-800" aria-hidden />
          メーカー：製品化・導入相談
        </Link>

        <div className="flex flex-wrap gap-2">
          {contributorSlug ? (
            <Link
              href={`/contributors/${contributorSlug}#support`}
              className="inline-flex flex-1 min-w-[7rem] items-center justify-center gap-1 rounded-lg border border-orange-300 bg-orange-50 px-2 py-2 text-[11px] font-bold text-orange-950 hover:bg-orange-100"
            >
              <HeartHandshake className="h-3.5 w-3.5" aria-hidden />
              職人を支援
            </Link>
          ) : (
            <span className="inline-flex flex-1 min-w-[7rem] items-center justify-center rounded-lg border border-dashed border-stone-200 bg-stone-50 px-2 py-2 text-[10px] text-stone-500">
              プロフィール未連携
            </span>
          )}
          <Link
            href={enterpriseHref}
            className="inline-flex flex-1 min-w-[7rem] items-center justify-center gap-1 rounded-lg border border-stone-300 bg-white px-2 py-2 text-[11px] font-bold text-stone-800 hover:bg-stone-50"
          >
            <Building2 className="h-3.5 w-3.5" aria-hidden />
            企業総合
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-10 space-y-6" aria-label="収益化の窓口">
      <div className="overflow-hidden rounded-2xl border-2 border-stone-900 bg-stone-900 shadow-xl ring-1 ring-stone-950/30">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-[10px] font-black uppercase tracking-[0.32em] text-amber-400/95">
            For enterprises · Priority
          </p>
          <p className="mt-2 text-xs leading-relaxed text-stone-400">
            現場ノート公式窓口 — 知的財産の買取・独占／非独占ライセンス・実施条件の相談は、まずこちらをご利用ください。
          </p>
          <Link
            href={rightsHref}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 text-center text-base font-black leading-snug text-stone-900 shadow-lg transition hover:bg-amber-50 sm:text-lg"
          >
            <Scale className="h-6 w-6 shrink-0 text-amber-700" aria-hidden />
            <span className="text-pretty">
              【現場ノート｜企業向け】このアイデア・ノウハウの権利買取・ライセンスを相談する
            </span>
          </Link>
          <p className="mt-3 text-center text-[11px] text-stone-500">
            専用フォームへ（仲介・投稿者との調整は運営がサポート）
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-white to-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-amber-100/80">
        <div className="border-b border-amber-200/70 bg-amber-100/40 px-5 py-3 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-amber-950/80">
            収益化の窓口（その他）
          </p>
          <p className="mt-1 text-xs leading-relaxed text-amber-950/80">
            メーカー向け製品化・
            <Link href="/contact/manufacturer" className="font-bold underline underline-offset-2">
              メーカー専用フォーム
            </Link>
            ／
            <Link href="/contact/enterprise" className="font-bold underline underline-offset-2">
              企業総合
            </Link>
            。
          </p>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
                情報提供者
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-stone-800">{contributorLabel}</p>
                {rank ? <ContributorRankBadge rank={rank} size="md" /> : null}
              </div>
            </div>
            {contributorSlug ? (
              <Link
                href={`/contributors/${contributorSlug}#support`}
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-orange-300 bg-orange-50 px-4 py-2.5 text-sm font-bold text-orange-950 transition hover:bg-orange-100 sm:self-center"
              >
                <HeartHandshake className="h-4 w-4 shrink-0" aria-hidden />
                この職人を支援する
              </Link>
            ) : (
              <p className="max-w-md text-xs leading-relaxed text-stone-500">
                プロフィール未連携の名義です。権利・製品化とも上記・下記フォームからご連絡ください。
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href={manufacturerHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-500/90 bg-gradient-to-r from-amber-100/90 to-orange-100/90 px-5 py-4 text-center text-sm font-black leading-snug text-amber-950 shadow-md transition hover:from-amber-200/90 hover:to-orange-100/90"
            >
              <Factory className="h-5 w-5 shrink-0 text-amber-900" aria-hidden />
              <span className="text-pretty">
                メーカー担当者様：この知恵を製品化・導入相談する
              </span>
            </Link>

            <Link
              href={enterpriseHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-stone-800 shadow-sm transition hover:bg-stone-50"
            >
              <Building2 className="h-4 w-4 shrink-0" aria-hidden />
              企業様·製品化（総合窓口）
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
