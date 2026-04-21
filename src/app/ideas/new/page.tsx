import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IdeaSubmitForm } from "@/components/idea-submit-form";

export const metadata: Metadata = {
  title: "知恵を投稿する",
  description: "現場のひらめきをオープンソース掲示板に投稿します。",
};

export default function NewIdeaPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-6">
          <Link
            href="/ideas"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            掲示板へ戻る
          </Link>
        </nav>

        <header className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange-800/80">
            Post
          </p>
          <h1 className="mt-2 text-2xl font-black text-stone-900 sm:text-3xl">
            掲示板に投稿する
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            <strong>現場の知恵</strong>も<strong>「こんな道具が欲しい」</strong>
            もOK。公開後、いいね・改善案が付きます。
          </p>
        </header>

        <IdeaSubmitForm />
      </main>
      <SiteFooter />
    </>
  );
}
