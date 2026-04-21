"use client";

import { useState } from "react";
import { Box, Boxes, Loader2, Video } from "lucide-react";

type PremiumProductKind = "tech_video" | "cad_pack";

type PremiumContentStripProps = {
  contentType: "recipe" | "tool";
  contentSlug: string;
  contentTitle: string;
};

/** 有料の技術解説動画・CAD パック販売（Stripe Checkout 接続予定） */
export function PremiumContentStrip({
  contentType,
  contentSlug,
  contentTitle,
}: PremiumContentStripProps) {
  const [pending, setPending] = useState<PremiumProductKind | null>(null);
  const [hint, setHint] = useState<string | null>(null);

  async function startCheckout(kind: PremiumProductKind) {
    setPending(kind);
    setHint(null);
    try {
      const res = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productKind: kind,
          contentType,
          contentSlug,
          contentTitle,
        }),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        url?: string;
        message?: string;
      };
      if (data.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setHint(data.message ?? "決済の準備が完了次第、ここから購入できるようになります。");
    } catch {
      setHint("通信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setPending(null);
    }
  }

  return (
    <section
      className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-white p-5 shadow-sm ring-1 ring-violet-100 sm:p-6"
      aria-label="有料デジタル商品"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-violet-800/80">
            Digital products
          </p>
          <h3 className="mt-1 text-base font-black text-stone-900">深掘りコンテンツ（準備中）</h3>
          <p className="mt-1 text-xs leading-relaxed text-stone-600">
            技術解説動画・CAD データは Stripe での決済に対応予定です。キー設定後、Checkout に接続します。
          </p>
        </div>
        <span className="mt-2 inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-white px-2 py-1 text-[10px] font-bold text-violet-800 sm:mt-0">
          <Box className="h-3.5 w-3.5" aria-hidden />
          Stripe
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => startCheckout("tech_video")}
          disabled={pending !== null}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-violet-300 bg-white px-4 py-4 text-sm font-black text-violet-950 shadow-sm transition hover:bg-violet-50 disabled:opacity-60"
        >
          {pending === "tech_video" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          ) : (
            <Video className="h-5 w-5 shrink-0 text-violet-700" aria-hidden />
          )}
          技術解説動画を購入
        </button>
        <button
          type="button"
          onClick={() => startCheckout("cad_pack")}
          disabled={pending !== null}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-violet-300 bg-white px-4 py-4 text-sm font-black text-violet-950 shadow-sm transition hover:bg-violet-50 disabled:opacity-60"
        >
          {pending === "cad_pack" ? (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          ) : (
            <Boxes className="h-5 w-5 shrink-0 text-violet-700" aria-hidden />
          )}
          CADデータを購入
        </button>
      </div>

      {hint ? (
        <p className="mt-3 rounded-lg bg-violet-100/60 px-3 py-2 text-xs leading-relaxed text-violet-950">
          {hint}
        </p>
      ) : null}
    </section>
  );
}
