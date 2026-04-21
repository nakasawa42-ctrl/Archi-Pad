import { ListOrdered } from "lucide-react";
import type { StepItem } from "@/lib/content";

type StepsPanelProps = {
  steps: StepItem[];
  heading: string;
};

export function StepsPanel({ steps, heading }: StepsPanelProps) {
  return (
    <section className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm shadow-stone-900/5">
      <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
          <ListOrdered className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </span>
        <div>
          <h2 className="text-base font-bold text-stone-900">{heading}</h2>
          <p className="text-[11px] font-medium text-stone-500">
            Step ごとに要所だけ抜粋。現場では墨と寸法を再確認を。
          </p>
        </div>
      </div>
      <ol className="mt-5 space-y-5">
        {steps.map((s) => (
          <li key={s.step} className="relative pl-0">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex shrink-0 flex-col items-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-orange-200 bg-orange-50 text-sm font-bold tabular-nums text-orange-800">
                  {s.step}
                </span>
                <span
                  className="mt-1 hidden w-px flex-1 bg-gradient-to-b from-orange-200 to-transparent sm:block min-h-[2rem]"
                  aria-hidden
                />
              </div>
              <div className="min-w-0 pb-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700/90">
                  Step {s.step}
                </p>
                <h3 className="mt-1 text-base font-bold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{s.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
