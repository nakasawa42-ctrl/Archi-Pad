"use client";

import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Lightbulb,
  MessageCirclePlus,
  Wrench,
} from "lucide-react";
import type { CommunityIdea, IdeaCategory } from "@/lib/community-ideas-types";
import { PostContributionActions } from "@/components/post-contribution-actions";

type IdeaCardProps = {
  idea: CommunityIdea;
  onLike: (ideaId: string) => void;
  onImprovement: (ideaId: string, body: string) => void;
};

const categoryStyles: Record<
  IdeaCategory,
  { label: string; className: string }
> = {
  wisdom: {
    label: "現場の知恵",
    className:
      "bg-orange-50 text-orange-950 ring-orange-200/90 border border-orange-100",
  },
  tool_wish: {
    label: "道具リクエスト",
    className:
      "bg-sky-50 text-sky-950 ring-sky-200/90 border border-sky-100",
  },
};

export function IdeaCard({ idea, onLike, onImprovement }: IdeaCardProps) {
  const [draft, setDraft] = useState("");
  const [openImprove, setOpenImprove] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const cat = categoryStyles[idea.category];
  const impCount = idea.improvements.length;

  return (
    <article className="flex h-full flex-col rounded-xl border border-stone-200/95 bg-white shadow-[0_4px_18px_-6px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:border-stone-300 hover:shadow-md">
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1 ${cat.className}`}
          >
            {idea.category === "tool_wish" ? (
              <Wrench className="h-3 w-3" aria-hidden />
            ) : (
              <Lightbulb className="h-3 w-3" aria-hidden />
            )}
            {cat.label}
          </span>
          <button
            type="button"
            onClick={() => onLike(idea.id)}
            className={`flex shrink-0 items-center gap-1 rounded-lg border px-2 py-1 text-xs font-bold transition ${
              idea.likedByViewer
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-stone-200 bg-stone-50 text-stone-700 hover:border-orange-300"
            }`}
            aria-pressed={idea.likedByViewer}
          >
            <Heart
              className={`h-3.5 w-3.5 ${idea.likedByViewer ? "fill-current" : ""}`}
              aria-hidden
            />
            {idea.likes}
          </button>
        </div>

        <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-stone-900">
          {idea.title}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-stone-600">
          {idea.body}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-stone-100 pt-3 text-[11px] text-stone-500">
          <span className="font-medium text-stone-600">{idea.authorLabel}</span>
          <span className="text-stone-300">·</span>
          <time dateTime={idea.createdAt}>
            {new Date(idea.createdAt).toLocaleDateString("ja-JP", {
              month: "numeric",
              day: "numeric",
            })}
          </time>
          <span className="ml-auto font-semibold text-stone-500">
            改善 {impCount}
          </span>
        </div>

        <PostContributionActions
          variant="compact"
          contentType="idea"
          contentSlug={idea.id}
          contentTitle={idea.title}
          contributorLabel={idea.authorLabel}
          contributorSlug={idea.contributorSlug}
          ideaId={idea.id}
        />

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-stone-300 bg-stone-50/80 py-2 text-xs font-bold text-stone-700 hover:bg-stone-100"
          aria-expanded={expanded}
        >
          {expanded ? "閉じる" : "全文・スレッド"}
          <ChevronDown
            className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>

      {expanded ? (
        <div className="border-t border-stone-100 bg-stone-50/50 px-4 pb-4 pt-3 sm:px-5">
          <p className="whitespace-pre-wrap text-[14px] leading-relaxed text-stone-800">
            {idea.body}
          </p>

          <section className="mt-5" aria-labelledby={`improvements-${idea.id}`}>
            <h4
              id={`improvements-${idea.id}`}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-stone-600"
            >
              <MessageCirclePlus className="h-3.5 w-3.5 text-orange-600" aria-hidden />
              改善案・企業メモ
            </h4>
            <ul className="mt-2 max-h-48 space-y-2 overflow-y-auto">
              {idea.improvements.length === 0 ? (
                <li className="rounded-md border border-dashed border-stone-200 bg-white px-2 py-2 text-xs text-stone-500">
                  まだありません。
                </li>
              ) : (
                idea.improvements.map((im) => (
                  <li
                    key={im.id}
                    className="rounded-md border border-stone-100 bg-white px-2.5 py-2 text-xs leading-relaxed text-stone-800"
                  >
                    <time className="text-[10px] text-stone-400" dateTime={im.createdAt}>
                      {new Date(im.createdAt).toLocaleString("ja-JP")}
                    </time>
                    <p className="mt-0.5 whitespace-pre-wrap">{im.body}</p>
                  </li>
                ))
              )}
            </ul>

            {openImprove ? (
              <div className="mt-3 space-y-2">
                <label className="sr-only" htmlFor={`improve-${idea.id}`}>
                  改善案を書く
                </label>
                <textarea
                  id={`improve-${idea.id}`}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  rows={3}
                  placeholder="追い込み・製品化の観点・安全注意など"
                  className="w-full rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-xs text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                />
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!draft.trim()) return;
                      onImprovement(idea.id, draft);
                      setDraft("");
                      setOpenImprove(false);
                    }}
                    className="rounded-md bg-orange-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-orange-700"
                  >
                    投稿
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenImprove(false)}
                    className="rounded-md px-2 py-1.5 text-xs text-stone-600 hover:bg-stone-200/80"
                  >
                    取消
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setOpenImprove(true)}
                className="mt-3 w-full rounded-md border border-orange-200 bg-white py-2 text-xs font-bold text-orange-900 hover:bg-orange-50"
              >
                ＋ 改善案を書く
              </button>
            )}
          </section>
        </div>
      ) : null}
    </article>
  );
}
