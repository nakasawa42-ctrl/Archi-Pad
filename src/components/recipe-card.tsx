import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChefHat } from "lucide-react";
import type { Recipe } from "@/lib/content";
import { ContentBadgeChip } from "@/components/content-badge";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm shadow-stone-900/5 transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10">
      <Link href={`/recipes/${recipe.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-stone-100">
        <Image
          src={recipe.thumbnailUrl}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {recipe.badges.map((b) => (
            <ContentBadgeChip key={b.label} badge={b} />
          ))}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-stone-800 shadow-sm backdrop-blur">
            <ChefHat className="h-3.5 w-3.5 text-orange-600" aria-hidden />
            {recipe.author}
          </span>
          <span className="rounded-full bg-orange-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
            Recipe
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold leading-snug text-stone-900">
          <Link
            href={`/recipes/${recipe.slug}`}
            className="hover:text-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
          >
            {recipe.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-stone-600">
          {recipe.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-stone-100 pt-3">
          <p className="text-[11px] font-medium text-stone-400">{recipe.publishedAt}</p>
          <Link
            href={`/recipes/${recipe.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            内容を見る
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
