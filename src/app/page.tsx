import { SiteHeader } from "@/components/site-header";
import { MissionStatement } from "@/components/mission-statement";
import { OperatorPreface } from "@/components/operator-preface";
import { HistoryInnovationBanner } from "@/components/history-innovation-banner";
import { EditorialVinylGenesis } from "@/components/editorial-vinyl-genesis";
import { OfficialXStrip } from "@/components/official-x-strip";
import { SubmitWisdomCta } from "@/components/submit-wisdom-cta";
import { SearchHero } from "@/components/search-hero";
import { RecipeCard } from "@/components/recipe-card";
import { ToolCard } from "@/components/tool-card";
import { SiteFooter } from "@/components/site-footer";
import { SponsorAdSlot } from "@/components/sponsor-ad-slot";
import { recipes, tools } from "@/lib/content";
import { Ruler, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <MissionStatement />
      <OperatorPreface />
      <HistoryInnovationBanner />
      <SearchHero />

      <div className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
        <SponsorAdSlot placement="home_leaderboard" />
      </div>

      <OfficialXStrip />
      <SubmitWisdomCta />
      <EditorialVinylGenesis />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
        <section id="recipes" className="scroll-mt-24">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-800/80">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Fresh
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
                新着の職人レシピ
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-stone-600">
                墨出しから仕上げまで、ステップと道具をセットで。バッジで難易度や用途がひと目で分かります。
              </p>
            </div>
            <span className="mt-2 inline-flex items-center gap-1.5 self-start rounded-full border border-stone-200 bg-white px-3 py-1 text-[11px] font-medium text-stone-500 shadow-sm sm:mt-0">
              <Ruler className="h-3.5 w-3.5 text-orange-600" aria-hidden />
              モバイルファースト表示
            </span>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>

          <div className="mt-10">
            <SponsorAdSlot placement="home_mid_content" />
          </div>
        </section>

        <section id="tools" className="mt-16 scroll-mt-24 border-t border-stone-200/80 pt-16 sm:mt-20 sm:pt-20">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-800/80">
              This week
            </p>
            <h2 className="text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
              今週の注目工具
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-stone-600">
              ビット選び、トルク感、現場での慣らし方まで。動画とアイキャッチで雰囲気ごと掴めます。
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
