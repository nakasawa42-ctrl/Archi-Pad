import { Crosshair, Flame } from "lucide-react";
import { OfficialXFeedbackButton } from "@/components/official-x-feedback-button";
import { getSiteUrl } from "@/lib/site";

/**
 * トップページ「読み物」— 一本の塩ビ管から広がった系譜（テキスト中心・図解は軽量SVG）
 */
export function EditorialVinylGenesis() {
  return (
    <article
      id="reading-vinyl-genesis"
      className="scroll-mt-24 border-b border-stone-200/90 bg-gradient-to-b from-stone-50/90 via-white to-orange-50/20"
      aria-labelledby="vinyl-genesis-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-800/75">
            Reading · 読み物
          </p>
          <h2
            id="vinyl-genesis-title"
            className="mt-4 font-serif text-2xl font-bold leading-snug tracking-wide text-stone-900 sm:text-3xl"
          >
            始まりは、一本の塩ビ管だった
          </h2>
          <p className="mt-6 text-left text-[15px] leading-[1.85] text-stone-700 sm:text-base">
            図面に名前のついた部材がなくても、仕様は現場から逆算できる。既製品が手に入らないなら、ただちに足元の
            <strong className="font-semibold text-stone-900">廃材</strong>
            に目を落とす。切れ端の塩ビ管を携え、墨と目盛だけで勝負する——それが、このサイトが信じる、
            <strong className="font-semibold text-stone-900">現場発の自作</strong>
            の究極の形だ。
          </p>
        </header>

        <section
          className="mx-auto mt-12 max-w-3xl"
          aria-labelledby="trial-diagram-heading"
        >
          <h3
            id="trial-diagram-heading"
            className="border-b border-orange-200/80 pb-2 font-serif text-lg font-bold text-stone-900 sm:text-xl"
          >
            試行錯誤の図解
          </h3>
          <p className="mt-4 text-[15px] leading-[1.85] text-stone-700 sm:text-base">
            問題だったのは、のちに誰もが口にするあの
            <span className="whitespace-nowrap font-semibold text-stone-900">「ツノ」</span>
            の角度——紙の上では単純でも、塩ビの記憶に沿わせるには、理屈より手数が要った。
          </p>

          <figure className="my-8 overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm sm:p-7">
            <figcaption className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Fig.1 想定ライン（概念図）
            </figcaption>
            <div className="mt-5 flex justify-center">
              <svg
                viewBox="0 0 360 140"
                className="h-auto w-full max-w-md text-stone-800"
                role="img"
                aria-labelledby="vinyl-fig1-desc"
              >
                <title id="vinyl-fig1-desc">直管から曲げ、先端にツノを立てる概念図</title>
                {/* 直管 */}
                <line
                  x1="24"
                  y1="88"
                  x2="168"
                  y2="88"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* 曲がり + ツノ */}
                <path
                  d="M 168 88 Q 210 88 228 52 L 248 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 248 22 L 268 8 L 262 34 Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                {/* 角度ガイド */}
                <path
                  d="M 248 22 L 300 22"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.35"
                />
                <text x="268" y="40" fontSize="11" fill="currentColor" opacity="0.6">
                  ツノ
                </text>
                <text x="52" y="112" fontSize="10" fill="currentColor" opacity="0.45">
                  塩ビ管（端材）
                </text>
              </svg>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              まず脳内で角を決め、管のどこに熱を集めるか印をつける。一発で決めるより、浅いカーブを何度も重ねて、最後に先端だけを立ち上げるイメージだ。
            </p>
          </figure>

          <div className="space-y-6 text-[15px] leading-[1.85] text-stone-700 sm:text-base">
            <div className="flex gap-4 rounded-xl border border-orange-100/80 bg-orange-50/30 p-4 sm:p-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-800"
                aria-hidden
              >
                <Flame className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="font-semibold text-stone-900">熱で曲げる</p>
                <p className="mt-2">
                  当時は今のような専用治具もなく、バーナーと箸先のような細い鉄で、加熱の当たりを細かく動かした。焦げさせると塩ビの強度が不安になるので、{" "}
                  <em className="not-italic font-medium text-stone-900">手元の様子を見ながら熱量を読む</em>
                  しかなかった。曲がりすぎたら戻せない——その緊張が、角度の勘を体に刻む。
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-stone-200/90 bg-stone-50/50 p-4 sm:p-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-stone-700/10 text-stone-800"
                aria-hidden
              >
                <Crosshair className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <p className="font-semibold text-stone-900">ヤスリで追い込む</p>
                <p className="mt-2">
                  熱だけでは吸収しきれないわずかなねじれは、荒めから極細まで段取りして面取りする。線が出るほど削るのではなく、
                  <em className="not-italic font-medium text-stone-900">ラインに沿って“呼吸が通る”まで</em>
                  繰り返す。粉が飛ぶたびに、入隅に立ち上がる想像のラインが、少しずつ現物に近づいていった。
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-14 max-w-3xl border-t border-stone-200 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-stone-400">
            40年後の結論
          </p>
          <blockquote className="mt-4 border-l-[3px] border-orange-600 bg-gradient-to-r from-orange-50/80 to-transparent py-2 pl-5 pr-2 sm:pl-6">
            <p className="font-serif text-lg font-bold leading-relaxed text-stone-900 sm:text-xl sm:leading-relaxed">
              「俺が塩ビで作ったものが、今は世界中で使われている。」
            </p>
          </blockquote>
          <p className="mt-5 text-sm leading-relaxed text-stone-600">
            誇張ではなく、検図の累積と複製がそこに至らせた結果だ。起点はただの廃止寸法の管かもしれないが、そこに宿った手探りの筋が、規格と道具の形になって還流している。
          </p>
        </footer>

        <OfficialXFeedbackButton
          articleTitle="始まりは、一本の塩ビ管だった"
          pageUrl={`${getSiteUrl()}/`}
        />
      </div>
    </article>
  );
}
