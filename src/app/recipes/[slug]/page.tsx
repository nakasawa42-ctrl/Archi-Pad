import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DetailHero } from "@/components/detail-hero";
import { MaterialsPanel } from "@/components/materials-panel";
import { StepsPanel } from "@/components/steps-panel";
import { WisdomBox } from "@/components/wisdom-box";
import { HeritageHonorCard } from "@/components/heritage-honor-card";
import { TechniqueAnnotationChip } from "@/components/technique-annotation-chip";
import { RecipeCatchCopyBlock } from "@/components/recipe-catch-copy";
import { RecipeChallengeBlock } from "@/components/recipe-challenge-block";
import { MasterEndorsementBadge } from "@/components/master-endorsement-badge";
import { OfficialXFeedbackButton } from "@/components/official-x-feedback-button";
import { PostContributionActions } from "@/components/post-contribution-actions";
import { SponsorAdSlot } from "@/components/sponsor-ad-slot";
import { PremiumContentStrip } from "@/components/premium-content-strip";
import { getRecipeBySlug, recipes } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return { title: "レシピが見つかりません" };

  const siteUrl = getSiteUrl();
  const path = `/recipes/${slug}`;
  const absoluteUrl = `${siteUrl}${path}`;

  return {
    title: recipe.title,
    description: recipe.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: absoluteUrl,
      siteName: "タクミパッド【公式】",
      title: `${recipe.title} | タクミパッド【公式】`,
      description: recipe.description,
      images: [
        {
          url: recipe.heroImageUrl,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${recipe.title} | タクミパッド【公式】`,
      description: recipe.description,
      images: [recipe.heroImageUrl],
    },
  };
}

export default async function RecipeDetailPage(props: PageProps) {
  const { slug } = await props.params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const pageUrl = `${getSiteUrl()}/recipes/${slug}`;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
        <nav className="mb-6" aria-label="パンくず">
          <Link
            href="/#recipes"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            新着の職人レシピへ戻る
          </Link>
        </nav>

        <DetailHero
          title={recipe.title}
          subtitle={recipe.description}
          metaLine={`公開 ${recipe.publishedAt} · ${recipe.author} · ${recipe.tags.join(" · ")}`}
          heroImageUrl={recipe.heroImageUrl}
          imageAlt={recipe.title}
          youtubeVideoId={recipe.youtubeVideoId}
          badges={recipe.badges}
        />

        <div className="mt-8">
          <SponsorAdSlot placement="article_below_hero" />
        </div>

        {recipe.catchCopy ? (
          <div className="mt-8 sm:mt-10">
            <RecipeCatchCopyBlock data={recipe.catchCopy} />
          </div>
        ) : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <MaterialsPanel items={recipe.materials} heading="必要な道具・資材リスト" />
            </div>
          </aside>
          <div className="flex flex-col gap-8 lg:col-span-8">
            {recipe.challenge ? (
              <RecipeChallengeBlock challenge={recipe.challenge} />
            ) : null}
            {recipe.heritageBackground ? (
              <HeritageHonorCard text={recipe.heritageBackground} />
            ) : null}
            {recipe.masterEndorsement ? (
              <MasterEndorsementBadge endorsement={recipe.masterEndorsement} />
            ) : null}
            <WisdomBox title={recipe.wisdomTitle} body={recipe.wisdomBody} />
            {recipe.techniqueAnnotation ? (
              <TechniqueAnnotationChip annotation={recipe.techniqueAnnotation} />
            ) : null}
            <StepsPanel steps={recipe.steps} heading="工程（ステップ）" />
          </div>
        </div>

        <div className="mt-10">
          <PremiumContentStrip
            contentType="recipe"
            contentSlug={slug}
            contentTitle={recipe.title}
          />
        </div>

        <PostContributionActions
          contentType="recipe"
          contentSlug={slug}
          contentTitle={recipe.title}
          contributorLabel={recipe.author}
          contributorSlug={recipe.contributorSlug}
        />

        <OfficialXFeedbackButton articleTitle={recipe.title} pageUrl={pageUrl} />
      </main>
      <SiteFooter />
    </>
  );
}
