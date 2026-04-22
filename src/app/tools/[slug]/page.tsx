import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DetailHero } from "@/components/detail-hero";
import { MaterialsPanel } from "@/components/materials-panel";
import { StepsPanel } from "@/components/steps-panel";
import { WisdomBox } from "@/components/wisdom-box";
import { OfficialXFeedbackButton } from "@/components/official-x-feedback-button";
import { PostContributionActions } from "@/components/post-contribution-actions";
import { SponsorAdSlot } from "@/components/sponsor-ad-slot";
import { PremiumContentStrip } from "@/components/premium-content-strip";
import { getToolBySlug, tools } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "工具ページが見つかりません" };

  const siteUrl = getSiteUrl();
  const path = `/tools/${slug}`;
  const absoluteUrl = `${siteUrl}${path}`;

  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: absoluteUrl,
      siteName: "現場ノート【公式】",
      title: `${tool.title} | 現場ノート【公式】`,
      description: tool.description,
      images: [
        {
          url: tool.heroImageUrl,
          width: 1200,
          height: 630,
          alt: tool.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.title} | 現場ノート【公式】`,
      description: tool.description,
      images: [tool.heroImageUrl],
    },
  };
}

export default async function ToolDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const pageUrl = `${getSiteUrl()}/tools/${slug}`;
  const contributorLabel = tool.contributorSlug
    ? `現場ノート編集部 · ${tool.brand}`
    : tool.brand;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-6" aria-label="パンくず">
          <Link
            href="/#tools"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            今週の注目工具へ戻る
          </Link>
        </nav>

        <DetailHero
          title={tool.title}
          subtitle={tool.description}
          metaLine={`更新 ${tool.publishedAt} · ${tool.brand}`}
          heroImageUrl={tool.heroImageUrl}
          imageAlt={tool.title}
          youtubeVideoId={tool.youtubeVideoId}
          badges={tool.badges}
        />

        <div className="mt-8">
          <SponsorAdSlot placement="article_below_hero" />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <MaterialsPanel
                items={tool.materials}
                heading="本体・付属・現場ですぐ買うなら"
              />
            </div>
          </aside>
          <div className="flex flex-col gap-8 lg:col-span-8">
            <WisdomBox title={tool.wisdomTitle} body={tool.wisdomBody} />
            <StepsPanel steps={tool.steps} heading="使い方・選定のステップ" />
          </div>
        </div>

        <div className="mt-10">
          <PremiumContentStrip
            contentType="tool"
            contentSlug={slug}
            contentTitle={tool.title}
          />
        </div>

        <PostContributionActions
          contentType="tool"
          contentSlug={slug}
          contentTitle={tool.title}
          contributorLabel={contributorLabel}
          contributorSlug={tool.contributorSlug}
        />

        <OfficialXFeedbackButton articleTitle={tool.title} pageUrl={pageUrl} />
      </main>
      <SiteFooter />
    </>
  );
}
