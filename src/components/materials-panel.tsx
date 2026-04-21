import { ExternalLink, Package } from "lucide-react";
import type { MaterialItem } from "@/lib/content";

type MaterialsPanelProps = {
  items: MaterialItem[];
  heading: string;
};

export function MaterialsPanel({ items, heading }: MaterialsPanelProps) {
  return (
    <section
      className="rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm shadow-stone-900/5"
      aria-labelledby="materials-heading"
    >
      <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-white shadow-md">
          <Package className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </span>
        <div>
          <h2 id="materials-heading" className="text-base font-bold text-stone-900">
            {heading}
          </h2>
          <p className="text-[11px] font-medium text-stone-500">
            タップで Amazon の候補一覧へ（アフィリエイト差し替え可）
          </p>
        </div>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-stone-100 bg-stone-50/60 p-3 transition hover:border-orange-200 hover:bg-orange-50/40"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-stone-900">{item.name}</p>
                {item.note ? (
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{item.note}</p>
                ) : null}
              </div>
              <a
                href={item.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-2 text-xs font-bold text-white shadow-md shadow-orange-600/25 transition hover:from-orange-600 hover:to-orange-700 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Amazon
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
