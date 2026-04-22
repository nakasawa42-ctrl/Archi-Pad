import { Hammer, MessageSquareText } from "lucide-react";
import { getOfficialXHandle } from "@/lib/social";

type OfficialXFeedbackButtonProps = {
  articleTitle: string;
  pageUrl: string;
};

/**
 * 公式Xへ「感想」を投げるためのポスト用ボタン（記事・レシピ共通）
 */
export function OfficialXFeedbackButton({
  articleTitle,
  pageUrl,
}: OfficialXFeedbackButtonProps) {
  const handle = getOfficialXHandle();
  const lines: string[] = [
    "【現場ノート｜公式】",
    `「${articleTitle}」——感想を一言。`,
  ];
  if (handle) lines.push(`@${handle}`);
  lines.push("", "#現場ノート");
  const text = lines.join("\n");

  const href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text,
  )}&url=${encodeURIComponent(pageUrl)}`;

  return (
    <div className="mt-12 border-t border-stone-300/90 pt-10">
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-stone-500">
        Official X
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto mt-4 flex max-w-xl items-center justify-center gap-3 rounded-2xl border-2 border-stone-800 bg-gradient-to-b from-stone-800 to-stone-950 px-6 py-4 text-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-orange-500/90 hover:from-stone-700 hover:to-stone-900 hover:shadow-orange-950/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-inner shadow-black/40 ring-2 ring-white/15 transition group-hover:scale-[1.03] group-hover:bg-orange-400">
          <Hammer className="h-5 w-5" strokeWidth={2.25} aria-hidden />
        </span>
        <span className="flex flex-col items-start gap-0.5 text-left">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 group-hover:text-orange-200/95">
            公式Xで感想を教えろ！
          </span>
          <span className="flex items-center gap-2 text-lg font-black tracking-tight">
            ポストする
            <MessageSquareText className="h-5 w-5 text-orange-400" aria-hidden />
          </span>
        </span>
      </a>
      <p className="mx-auto mt-3 max-w-md text-center text-xs leading-relaxed text-stone-500">
        タグ <span className="font-semibold text-stone-700">#現場ノート</span>{" "}
        で検索。ネタ・突っ込み・師匠自慢、どうぞ。
      </p>
    </div>
  );
}
