/**
 * タクミパッドの核心理念 — トップ最上段の宣言
 */
export function MissionStatement() {
  return (
    <section
      className="relative overflow-hidden border-b-2 border-orange-400/35 bg-gradient-to-br from-stone-900 via-stone-800 to-zinc-900 text-white"
      aria-labelledby="mission-statement-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(251,146,60,0.4) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0, transparent 40%)`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.45em] text-orange-300/90">
          Manifesto
        </p>
        <h2 id="mission-statement-heading" className="sr-only">
          タクミパッドの理念
        </h2>
        <blockquote className="mx-auto mt-6 max-w-4xl text-center">
          <p className="font-serif text-2xl font-bold leading-[1.45] tracking-wide text-white sm:text-3xl sm:leading-[1.4] lg:text-[2.15rem] lg:leading-[1.35]">
            技術を独占せず、
            <br className="sm:hidden" />
            共有することで
            <br className="md:hidden" />
            業界をアップデートする。
          </p>
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-stone-300 sm:text-base">
          <a
            href="#preface"
            className="font-semibold text-orange-200 underline decoration-orange-400/60 underline-offset-4 transition hover:text-white"
          >
            はじめに · 運営者の想い
          </a>
          をどうぞ。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-orange-200/90">
            Open
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            Co-develop
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
            Field first
          </span>
        </div>
      </div>
    </section>
  );
}
