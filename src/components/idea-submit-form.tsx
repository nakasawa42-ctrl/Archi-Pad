"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DraftingCompass, Lightbulb, Loader2, Wrench } from "lucide-react";
import type { IdeaCategory } from "@/lib/community-ideas-types";
import { addIdea, loadIdeas, migrateLegacyIdeasIfNeeded, persistIdeas } from "@/lib/community-ideas-storage";

export function IdeaSubmitForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [authorLabel, setAuthorLabel] = useState("");
  const [category, setCategory] = useState<IdeaCategory>("wisdom");
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setPending(true);
    migrateLegacyIdeasIfNeeded();
    const ideas = loadIdeas();
    const next = addIdea(ideas, { title, body, authorLabel, category });
    persistIdeas(next);
    router.push("/ideas");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6 rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <fieldset>
        <legend className="text-sm font-bold text-stone-800">
          投稿の種類 <span className="text-red-600">*</span>
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label
            className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition ${
              category === "wisdom"
                ? "border-orange-500 bg-orange-50/80 shadow-inner"
                : "border-stone-200 bg-stone-50/50 hover:border-orange-200"
            }`}
          >
            <input
              type="radio"
              name="category"
              className="mt-1"
              checked={category === "wisdom"}
              onChange={() => setCategory("wisdom")}
            />
            <span>
              <span className="flex items-center gap-1.5 font-bold text-stone-900">
                <Lightbulb className="h-4 w-4 text-orange-600" aria-hidden />
                現場の知恵
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-stone-600">
                手癖・安全策・裏ワザなど、試して効いたこと。
              </span>
            </span>
          </label>
          <label
            className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition ${
              category === "tool_wish"
                ? "border-sky-500 bg-sky-50/80 shadow-inner"
                : "border-stone-200 bg-stone-50/50 hover:border-sky-200"
            }`}
          >
            <input
              type="radio"
              name="category"
              className="mt-1"
              checked={category === "tool_wish"}
              onChange={() => setCategory("tool_wish")}
            />
            <span>
              <span className="flex items-center gap-1.5 font-bold text-stone-900">
                <Wrench className="h-4 w-4 text-sky-700" aria-hidden />
                こんな道具が欲しい
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-stone-600">
                未だ無い治具・メジャー・電動まわりの「あったら」の声。
              </span>
            </span>
          </label>
        </div>
      </fieldset>

      <div>
        <label htmlFor="idea-title" className="text-sm font-bold text-stone-800">
          タイトル <span className="text-red-600">*</span>
        </label>
        <input
          id="idea-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={200}
          placeholder={
            category === "tool_wish"
              ? "例：角出し墨を一人で押さえられる軽量クリップ"
              : "例：現場で効いたメジャー掛けの裏ワザ"
          }
          className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none ring-orange-400/25 focus:border-orange-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="idea-body" className="text-sm font-bold text-stone-800">
          内容 <span className="text-red-600">*</span>
        </label>
        <textarea
          id="idea-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={8}
          maxLength={8000}
          placeholder={
            category === "tool_wish"
              ? "想定する用途・既存品との違い・可能なら予算感や写真URLなど"
              : "手順・注意点・写真は公式Xなどでも可"
          }
          className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none ring-orange-400/25 focus:border-orange-400 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="idea-author" className="text-sm font-bold text-stone-800">
          表示名（任意）
        </label>
        <input
          id="idea-author"
          value={authorLabel}
          onChange={(e) => setAuthorLabel(e.target.value)}
          maxLength={80}
          placeholder="ハンドル・現場名など。空欄なら匿名"
          className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none ring-orange-400/25 focus:border-orange-400 focus:ring-2"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 py-4 text-lg font-black text-white shadow-lg transition hover:from-orange-500 hover:to-orange-600 disabled:opacity-60"
      >
        {pending ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
        ) : (
          <DraftingCompass className="h-5 w-5" strokeWidth={2} aria-hidden />
        )}
        掲示板に公開する
      </button>

      <p className="text-center text-xs text-stone-500">
        β版：このブラウザの掲示板のみに反映されます。企業様の製品化相談は
        <a href="/contact/enterprise" className="font-semibold text-orange-700 underline">
          専用窓口
        </a>
        へ。
      </p>
    </form>
  );
}
