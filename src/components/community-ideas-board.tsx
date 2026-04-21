"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Filter, LayoutGrid, Lightbulb, Users, Wrench } from "lucide-react";
import type { CommunityIdea, IdeaCategory } from "@/lib/community-ideas-types";
import {
  addImprovement,
  loadIdeas,
  migrateLegacyIdeasIfNeeded,
  persistIdeas,
  toggleLike,
} from "@/lib/community-ideas-storage";
import { IdeaCard } from "@/components/idea-card";

type FilterKey = "all" | IdeaCategory;

export function CommunityIdeasBoard() {
  const [ideas, setIdeas] = useState<CommunityIdea[] | null>(null);
  const [filter, setFilter] = useState<FilterKey>("all");

  useEffect(() => {
    migrateLegacyIdeasIfNeeded();
    setIdeas(loadIdeas());
  }, []);

  const sync = useCallback((next: CommunityIdea[]) => {
    setIdeas(next);
    persistIdeas(next);
  }, []);

  const handleLike = useCallback(
    (id: string) => {
      if (!ideas) return;
      sync(toggleLike(ideas, id));
    },
    [ideas, sync],
  );

  const handleImprovement = useCallback(
    (id: string, body: string) => {
      if (!ideas) return;
      sync(addImprovement(ideas, id, body));
    },
    [ideas, sync],
  );

  const filtered = useMemo(() => {
    if (!ideas) return [];
    if (filter === "all") return ideas;
    return ideas.filter((i) => i.category === filter);
  }, [ideas, filter]);

  if (!ideas) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center text-stone-500">
        掲示板を読み込み中…
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-stone-300/80 bg-gradient-to-r from-emerald-50/90 via-white to-sky-50/50 p-5 sm:flex sm:items-start sm:justify-between sm:gap-8 sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-emerald-700/20 bg-white text-emerald-800 shadow-md">
            <Users className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-900/70">
              Open bulletin
            </p>
            <h2 className="mt-1 text-xl font-black text-stone-900 sm:text-2xl">
              オープンソース掲示板
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              <strong className="text-stone-800">現場の知恵</strong>も
              <strong className="text-stone-800">「こんな道具が欲しい」</strong>
              も、カードで一覧。企業が素早く拾えるよう、情報は短く・ラベルで分類。
              <span className="block pt-1 text-xs font-medium text-stone-500">
                β：データはこのブラウザ内のみ保存。
              </span>
            </p>
            <p className="mt-3 text-sm">
              <Link
                href="/contact/enterprise"
                className="font-semibold text-emerald-900 underline decoration-emerald-400/80 underline-offset-2 hover:text-emerald-950"
              >
                製品化の相談は企業専用窓口へ
              </Link>
            </p>
          </div>
        </div>
        <Link
          href="/ideas/new"
          className="mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-xl border-2 border-stone-900 bg-stone-900 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-stone-800 sm:mt-0 sm:w-auto"
        >
          投稿する
        </Link>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-stone-700">
          <LayoutGrid className="h-4 w-4 text-orange-600" aria-hidden />
          一覧 · {filtered.length} 件
        </div>

        <div
          className="flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="カテゴリで絞り込み"
        >
          <span className="flex items-center gap-1 text-xs font-bold text-stone-500">
            <Filter className="h-3.5 w-3.5" aria-hidden />
            表示:
          </span>
          {(
            [
              ["all", "すべて", null],
              ["wisdom", "知恵", Lightbulb],
              ["tool_wish", "道具", Wrench],
            ] as const
          ).map(([key, label, Icon]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                filter === key
                  ? "border-orange-500 bg-orange-500 text-white shadow"
                  : "border-stone-200 bg-white text-stone-700 hover:border-orange-300"
              }`}
            >
              {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
              {label}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((idea) => (
          <li key={idea.id} className="flex min-h-0">
            <IdeaCard
              idea={idea}
              onLike={handleLike}
              onImprovement={handleImprovement}
            />
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-200 bg-stone-50 py-12 text-center text-sm text-stone-500">
          該当する投稿がありません。
        </p>
      ) : null}
    </div>
  );
}
