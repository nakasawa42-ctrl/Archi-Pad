/**
 * はじめに — 運営者の想い（トップ）
 */
export function OperatorPreface() {
  return (
    <section
      id="preface"
      className="scroll-mt-24 border-b border-stone-200/90 bg-gradient-to-b from-white via-stone-50/80 to-orange-50/20"
      aria-labelledby="operator-preface-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-orange-800/75">
              Preface
            </p>
            <p className="text-xs font-medium text-stone-400">現場ノート【公式】</p>
          </div>
          <h2
            id="operator-preface-heading"
            className="mt-2 font-serif text-2xl font-bold tracking-wide text-stone-900 sm:text-3xl"
          >
            はじめに
            <span className="block pt-1 text-lg font-black text-orange-800 sm:inline sm:pt-0 sm:before:content-['·'] sm:before:px-2">
              運営者の想い
            </span>
          </h2>

          <div className="relative mt-8 border-l-[4px] border-orange-500 pl-6 sm:pl-8">
            <div
              className="pointer-events-none absolute -left-px bottom-0 top-0 w-px bg-gradient-to-b from-orange-500 via-orange-400/50 to-transparent"
              aria-hidden
            />

            <div className="space-y-6 text-[15px] leading-[1.95] text-stone-800 sm:text-base sm:leading-[2]">
              <p className="font-semibold text-stone-900">
                40年前、俺が自作した道具がいつの間にか世界標準になっていた。
              </p>
              <p>
                それは悔しいことじゃない。俺のアイデアが誰かの役に立っていることが、何より嬉しいんだ。
              </p>
              <p className="pt-1 font-semibold text-stone-900">
                だから、ここを作った。
              </p>
              <p>
                現場の知恵を独占せず、みんなで出し合えば、もっといい道具が生まれる。
              </p>
              <p className="border-t border-orange-200/60 pt-6 text-base font-bold leading-relaxed text-stone-900 sm:text-lg">
                メーカーも職人も、みんなで日本のモノづくりを面白くしようぜ。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
