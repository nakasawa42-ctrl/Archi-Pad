import { BookOpen, Sparkles } from "lucide-react";

type WisdomBoxProps = {
  title: string;
  body: string;
};

export function WisdomBox({ title, body }: WisdomBoxProps) {
  return (
    <aside
      className="relative overflow-hidden rounded-2xl border-2 border-amber-200/90 bg-gradient-to-br from-amber-50 via-orange-50/70 to-white p-5 shadow-[0_12px_40px_-12px_rgba(234,88,12,0.25)] ring-1 ring-orange-200/40"
      aria-labelledby="wisdom-heading"
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-orange-400/15 blur-2xl"
        aria-hidden
      />
      <div className="relative flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-600/30">
          <Sparkles className="h-5 w-5" strokeWidth={2.25} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-orange-900/70">
            <BookOpen className="h-3.5 w-3.5" aria-hidden />
            伝承の知恵袋
          </p>
          <h2
            id="wisdom-heading"
            className="mt-2 text-lg font-bold leading-snug text-stone-900 sm:text-xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">{body}</p>
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent"
        aria-hidden
      />
    </aside>
  );
}
