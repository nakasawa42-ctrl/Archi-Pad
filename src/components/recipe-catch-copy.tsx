import type { RecipeCatchCopy as CatchCopy } from "@/lib/content";

type RecipeCatchCopyProps = {
  data: CatchCopy;
};

export function RecipeCatchCopyBlock({ data }: RecipeCatchCopyProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-4 sm:px-6"
      aria-labelledby="catch-copy-heading"
    >
      <div className="relative overflow-hidden rounded-2xl border border-orange-200/60 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/30 px-5 py-8 shadow-md shadow-orange-950/5 sm:px-10 sm:py-10">
        <div
          className="pointer-events-none absolute -left-4 top-1/2 font-serif text-8xl leading-none text-orange-200/90 sm:text-9xl"
          aria-hidden
        >
          「
        </div>
        <div
          className="pointer-events-none absolute -right-2 bottom-4 font-serif text-8xl leading-none text-orange-200/90 sm:text-9xl"
          aria-hidden
        >
          」
        </div>

        <h2
          id="catch-copy-heading"
          className="relative text-center font-serif text-xl font-bold leading-snug tracking-wide text-stone-900 sm:text-2xl sm:leading-tight md:text-[1.65rem]"
        >
          {data.headline}
        </h2>
        <p className="relative mt-4 text-center text-sm font-medium leading-relaxed text-orange-900/80 sm:text-base">
          {data.subline}
        </p>
      </div>
    </section>
  );
}
