import Image from "next/image";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { ContentBadgeChip } from "@/components/content-badge";
import type { ContentBadge } from "@/lib/content";

type DetailHeroProps = {
  title: string;
  subtitle?: string;
  metaLine: string;
  heroImageUrl: string;
  imageAlt: string;
  youtubeVideoId: string;
  badges: ContentBadge[];
};

export function DetailHero({
  title,
  subtitle,
  metaLine,
  heroImageUrl,
  imageAlt,
  youtubeVideoId,
  badges,
}: DetailHeroProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-lg shadow-stone-900/[0.06]">
      <div className="border-b border-orange-100/80 bg-gradient-to-r from-white via-orange-50/50 to-amber-50/40 px-4 py-5 sm:px-6 sm:py-7">
        <div className="flex flex-wrap gap-1.5">
          {badges.map((b) => (
            <ContentBadgeChip key={b.label} badge={b} />
          ))}
        </div>
        <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-stone-900 sm:text-3xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-2 text-sm font-medium text-stone-600 sm:text-base">{subtitle}</p>
        ) : null}
        <p className="mt-3 text-xs font-medium text-stone-400 sm:text-sm">{metaLine}</p>
      </div>

      <div className="grid gap-4 p-4 sm:gap-6 sm:p-6 lg:grid-cols-2 lg:items-start">
        <YouTubeEmbed videoId={youtubeVideoId} title={`${title} の動画`} />
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 shadow-inner">
          <Image
            src={heroImageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
        </div>
      </div>
    </div>
  );
}
