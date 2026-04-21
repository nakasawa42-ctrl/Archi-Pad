export type BadgeVariant = "pro" | "beginner" | "safety" | "trend";

export interface ContentBadge {
  label: string;
  variant: BadgeVariant;
}

export interface MaterialItem {
  id: string;
  name: string;
  note?: string;
  /** Amazon の商品 URL（アフィリエイトパラメータは運用で差し替え） */
  amazonUrl: string;
}

export interface StepItem {
  step: number;
  title: string;
  body: string;
}

/** ビス頭の出し量など、要所だけを抜き出した注釈チップ */
export interface TechniqueAnnotation {
  headline: string;
  body: string;
}

export interface RecipeCatchCopy {
  headline: string;
  subline: string;
}

export interface RecipeChallenge {
  problem: string;
  solution: string;
}

/** 師匠からの太鼓判・コメント枠 */
export interface MasterEndorsement {
  quote: string;
  /** 例: 師匠（あなた） */
  attribution: string;
}

export interface Recipe {
  type: "recipe";
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  tags: string[];
  badges: ContentBadge[];
  thumbnailUrl: string;
  heroImageUrl: string;
  youtubeVideoId: string;
  materials: MaterialItem[];
  steps: StepItem[];
  wisdomTitle: string;
  wisdomBody: string;
  /** 名工の系譜・伝承にまつわる背景（任意） */
  heritageBackground?: string;
  /** 「ビスの絶妙な出し具合」など、工程に添える技注釈（任意） */
  techniqueAnnotation?: TechniqueAnnotation;
  /** ヒーロー直下のキャッチコピー（任意） */
  catchCopy?: RecipeCatchCopy;
  /** 課題と解決の対比（任意） */
  challenge?: RecipeChallenge;
  /** 師匠の太鼓判バッジ（任意） */
  masterEndorsement?: MasterEndorsement;
  /** 貢献者プロフィール (`/contributors/[slug]`) への参照 */
  contributorSlug?: string;
}

export interface ToolSpotlight {
  type: "tool";
  slug: string;
  title: string;
  brand: string;
  description: string;
  publishedAt: string;
  badges: ContentBadge[];
  thumbnailUrl: string;
  heroImageUrl: string;
  youtubeVideoId: string;
  materials: MaterialItem[];
  /** 工具紹介では「付属品・おすすめ消耗品」など材料リストを流用 */
  steps: StepItem[];
  wisdomTitle: string;
  wisdomBody: string;
  /** レビュー執筆者のプロフィール（公式編集など） */
  contributorSlug?: string;
}

export const recipes: Recipe[] = [
  {
    type: "recipe",
    contributorSlug: "deshi-memo",
    slug: "vinyl-trim-joiner-ceiling",
    title: "塩ビ見切り×直角ジョイナー — 入隅のラインをビシッと通す神納まり",
    description:
      "突き付けに任せない入隅。直角ジョイナーで見切りを噛ませ、天井まわりのラインとクロスの耐久を同時に取りにいく。",
    publishedAt: "2026-04-22",
    author: "徒弟メモ · 師匠の現場より",
    tags: ["天井", "見切り", "クロス", "ジョイナー"],
    badges: [
      { label: "プロ直伝", variant: "pro" },
      { label: "納まり", variant: "trend" },
    ],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1635321593217-40050d13d4fa?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1635321593217-40050d13d4fa?w=1600&q=80",
    youtubeVideoId: "n2a1_7IjoLw",
    catchCopy: {
      headline: "「見切りを制する者は、天井を制する。」",
      subline:
        "〜弟子が編み出した、塩ビ見切り＋直角ジョイナーの神納まり〜",
    },
    challenge: {
      problem:
        "突き付けだけに頼ると、入隅で隙間が出やすい。経年の乾燥や躯体の変形で位置が動くと、ますます目立つ。",
      solution:
        "直角ジョイナーを噛ませて見切り同士を規格どおりに位置決めすると、入隅のラインがビシッと通り、クロス端の剥がれも防げる。",
    },
    masterEndorsement: {
      quote: "俺の弟子もなかなかやるだろ？",
      attribution: "師匠（あなた）",
    },
    materials: [
      {
        id: "vt-1",
        name: "塩ビ系天井見切り（現場の仕様に合わせた断面）",
        note: "色・幅は元請指定を確認",
        amazonUrl: "https://www.amazon.co.jp/s?k=天井+見切り+塩ビ",
      },
      {
        id: "vt-2",
        name: "直角ジョイナー（入隅コーナー対応）",
        amazonUrl: "https://www.amazon.co.jp/s?k=直角ジョイナー+天井",
      },
      {
        id: "vt-3",
        name: "見切り用ビス・クリップ類（メーカー純正推奨）",
        amazonUrl: "https://www.amazon.co.jp/s?k=見切り+ビス+天井",
      },
      {
        id: "vt-4",
        name: "ジョイナー周りのシーリング材",
        note: "クラック防止に念入りに",
        amazonUrl: "https://www.amazon.co.jp/s?k=シーリング+コーキング",
      },
    ],
    steps: [
      {
        step: 1,
        title: "入隅の芯と見切りの下書きカット",
        body: "天井・壁の墨と見切り額を先に決め、ジョイナー分の食い込みを含めて尺を切り直す。突き付け寸法だけで済ませない。",
      },
      {
        step: 2,
        title: "直角ジョイナーに両列の見切りを噛ませる",
        body: "先端をジョイナーの溝へ確実に入れ、面が開かないよう軽く押さえながら位置を決める。わずかなねじれが入隅の見え面を潰す。",
      },
      {
        step: 3,
        title: "躯体・ボードへの取り付けと段差確認",
        body: "規定ピッチで留め、レーザーまたは水糸で一直線を確認。ジョイナー裏は隙間が残らないように軽く叩き込み。",
      },
      {
        step: 4,
        title: "クロス貼り前の最終チェック",
        body: "入隅の見え線が通っていること、ビス頭が浮いていないことをラインで確認。必要なら微調整だけで済む状態にしてから工程へ渡す。",
      },
    ],
    wisdomTitle: "見切りは「止める」より「位置を奪わない」が先",
    wisdomBody:
      "入隅は一発勝負の見え場所。ジョイナーは寸法の逃げを作る道具ではなく、ラインを確定させる土台だと心得る。噛ませた瞬間にラインが決まるよう、事前のカットと芯出しに時間を割くほど、仕上げが楽になる。",
  },
  {
    type: "recipe",
    contributorSlug: "densho-record",
    slug: "c38-ironwall-board-ruler",
    title: "ズレ知らず！C38とビス1本で作る「鉄壁ボード定規」の作り方",
    description:
      "軽天材の端材に、ビス頭を数ミリだけ出すだけ。ボード端に「カチッ」と引っ掛け、定規が逃げない直線を引く現場の生存戦略。",
    publishedAt: "2026-04-22",
    author: "伝承録 · 匿名の先達を敬う",
    tags: ["軽天", "ボード", "現場小技", "C38"],
    badges: [
      { label: "プロ直伝", variant: "pro" },
      { label: "名工の系譜", variant: "trend" },
    ],
    heritageBackground:
      "ある引退した熟練職人から受け継いだ、現場の生存戦略。派手な道具より、身の丈に合った一手を残すことの重みを、改めて胸に刻みたい。",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    youtubeVideoId: "n2a1_7IjoLw",
    materials: [
      {
        id: "c38-1",
        name: "C38（軽天材）の端材",
        note: "真っ直ぐなものを選ぶ。長さはボード幅より短くて可",
        amazonUrl: "https://www.amazon.co.jp/s?k=C38+軽天",
      },
      {
        id: "screw-1",
        name: "ビス 1本",
        note: "コーススレッド等、頭頂がしっかりしたもの",
        amazonUrl: "https://www.amazon.co.jp/s?k=コーススレッド",
      },
    ],
    techniqueAnnotation: {
      headline: "ビスの絶妙な出し具合",
      body: "ビス頭は数ミリだけ顔を出すのが命。出しすぎるとボード面を食い潰し、浅いと「カチッ」が弱く定規が逃げる。ネジの頭径とその日のボード厚で一度空振りしてから本番。",
    },
    steps: [
      {
        step: 1,
        title: "C38片側にビスを打ち、頭を数ミリだけ出す",
        body: "棟幅の安定した面を下に見て、片フランジ側にまっすぐ打ち込む。インパクトは最後の一発でトルクを落とし、頭が段差にならないよう均す。",
      },
      {
        step: 2,
        title: "ボードの端へ「カチッ」と引っ掛ける",
        body: "出したビス頭をボードの耳付きに引っ掛け、定規（C38本体）が手前に滑らないことを確認。引っ掛け音が湿るなら頭が浅い。",
      },
      {
        step: 3,
        title: "定規を押さえて直線を引く",
        body: "鉄壁の状態でカッターや墨筋に沿って一気に。長尺は二人持ちか、中途で位置を取り直さず一度の押さえで決める。",
      },
    ],
    wisdomTitle: "「カチッ」の一秒で、定規はもう逃げない",
    wisdomBody:
      "C38の片側にビスを打ち、その頭を数ミリだけ出す。ボードの端にそのビスを「カチッ」と引っ掛けるだけで、定規が滑らず完璧な直線が引ける。工具箱の厚みを競うより、先達が身体で覚えたこの一手を、敬意をもって継ぐことが本質です。",
  },
  {
    type: "recipe",
    contributorSlug: "sho-sato",
    slug: "wall-shelf-oak",
    title: "壁付け棚 — オーク突板で歪みにくい奥行き設計",
    description:
      "ランバー寸法とビス角度を決め打ち。現場で迷わない墨出しから仕上げまで。",
    publishedAt: "2026-04-18",
    author: "大工・佐藤",
    tags: ["収納", "木材", "インパクト"],
    badges: [
      { label: "プロ直伝", variant: "pro" },
      { label: "現場対応", variant: "safety" },
    ],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    youtubeVideoId: "n2a1_7IjoLw",
    materials: [
      {
        id: "m1",
        name: "オーク突板ランバー 20×200×1820",
        note: "実寸の±0.5mmは墨で吸収",
        amazonUrl: "https://www.amazon.co.jp/s?k=オーク+ランバー",
      },
      {
        id: "m2",
        name: "コーススレッドビス 4.2×65",
        amazonUrl: "https://www.amazon.co.jp/s?k=コーススレッド+65mm",
      },
      {
        id: "m3",
        name: "木工用ボンド（速乾）",
        amazonUrl: "https://www.amazon.co.jp/s?k=木工+ボンド+速乾",
      },
    ],
    steps: [
      {
        step: 1,
        title: "壁芯と棚ラインの墨出し",
        body: "レーザーで水平ラインを出し、芯出しマーカーでランバー位置を轍に落とす。コンクリ壁ならパテ跡も確認。",
      },
      {
        step: 2,
        title: "ビス孔の下穴とさし角度",
        body: "極力せん断を避けるため、羽子板方向に3°だけ傾けて下穴。先端のサックで木繊維を裂かない。",
      },
      {
        step: 3,
        title: "躯体側のアンカー取り付け",
        body: "ピッチはメーカー指定より10mm詰めて引っ張り強度を稼ぐ（現場ではサブ下地がある場合のみ）。",
      },
      {
        step: 4,
        title: "仕上げと巾の検尺",
        body: "R面取りは鉋代わりにサンダー#120→#240。巾は両端で1mm以内に収まるよう微調整。",
      },
    ],
    wisdomTitle: "棚板は「水平」より先に「ねじれ」を潰せ",
    wisdomBody:
      "壁のわずかな傾きより、ランバー自身のねじれが見た目を壊します。敷き込み前に天板裏にストレートエッジを当て、隙間の出方で裏面を一次選別。外観面にねじれが回らないよう向きを揃えるのが職人の初手です。",
  },
  {
    type: "recipe",
    contributorSlug: "tanaka-zosaku",
    slug: "beginner-tool-rack",
    title: "初心者でも安定するツールラック — ビス本数を最小化",
    description:
      "突板合板と丸棒だけ。図面テンプレート付きの組み立てレシピ。",
    publishedAt: "2026-04-15",
    author: "造作家具・田中",
    tags: ["初心者向け", "合板", "収納"],
    badges: [
      { label: "初心者向け", variant: "beginner" },
      { label: "短時間", variant: "trend" },
    ],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530124566582-eb65b39288de?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1530124566582-eb65b39288de?w=1600&q=80",
    youtubeVideoId: "F5kwNpE0OyE",
    materials: [
      {
        id: "m1",
        name: "ラワン合板 12mm",
        amazonUrl: "https://www.amazon.co.jp/s?k=ラワン+合板+12mm",
      },
      {
        id: "m2",
        name: "木ねじ 3.5×40",
        amazonUrl: "https://www.amazon.co.jp/s?k=木ねじ+3.5+40",
      },
      {
        id: "m3",
        name: "丸棒 φ15×900",
        note: "代用可",
        amazonUrl: "https://www.amazon.co.jp/s?k=丸棒+木+15mm",
      },
    ],
    steps: [
      {
        step: 1,
        title: "型紙に合わせて直切り",
        body: "コンパクトスライドで直線のみ。縦横それぞれ1枚ずつ先に切り、長さをそろえてから番号を振る。",
      },
      {
        step: 2,
        title: "側板と背板の併せ",
        body: "背板は上下に3mm浅く、見え目の段差で誤差を吸収。クランプは2本だけで十分。",
      },
      {
        step: 3,
        title: "丸棒ホルダーの位置決め",
        body: "ドリルガイドで直角度を保ち、手で押さえると傾くので必ず定規を併用。",
      },
    ],
    wisdomTitle: "合板は「表」と「裏」を固定する",
    wisdomBody:
      "同じ合板でも表裏で膨潤率が違います。レシピどおりにカットしたら、表向きを揃えてから組付け。仕上げの塗装は両面から薄く入れると反りにくいです。",
  },
];

export const tools: ToolSpotlight[] = [
  {
    type: "tool",
    contributorSlug: "archi-editorial",
    slug: "makita-impact-18v",
    title: "マキタ インパクト 18V — 現場で選ぶビットとトルク感",
    brand: "マキタ",
    description:
      "高負荷の梁廻りから細かい回し止めまで。トリガー制御とビット選びを一本にまとめました。",
    publishedAt: "2026-04-19",
    badges: [
      { label: "今週の一押し", variant: "trend" },
      { label: "プロ直伝", variant: "pro" },
    ],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907fcc09?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907fcc09?w=1600&q=80",
    youtubeVideoId: "9vJRopau0q0",
    materials: [
      {
        id: "t1",
        name: "マキタ 18V インパクトドライバ 本体",
        amazonUrl: "https://www.amazon.co.jp/s?k=マキタ+インパクト+18V",
      },
      {
        id: "t2",
        name: "ロングビット 65mm 磁気タイプ",
        amazonUrl: "https://www.amazon.co.jp/s?k=インパクト+ビット+65mm",
      },
      {
        id: "t3",
        name: "替えブラシセット",
        note: "メンテ用品",
        amazonUrl: "https://www.amazon.co.jp/s?k=マキタ+ブラシ+インパクト",
      },
    ],
    steps: [
      {
        step: 1,
        title: "木材径ごとのビット選定",
        body: "Φ4コーススレッドなら#2ロングが無難。硬い木種では先端をマグネットタイプに変えると空打ちが減る。",
      },
      {
        step: 2,
        title: "トリガーの「半押し」練習",
        body: "浅い駒かすめで回し止めの手前まで。トルクリミッタがある機種は微調整の基準値をメモしておく。",
      },
      {
        step: 3,
        title: "バッテリー残量とパワー低下の当たり",
        body: "1段階落ちた瞬間にビット摩耗が乗る。現場では交換タイミングを音で聞き分ける。",
      },
    ],
    wisdomTitle: "音が変わったら止める — ねじ山が教えてくれる",
    wisdomBody:
      "きしみ音が高くなったら、ねじ山かビット先端が焼けている合図。無理に最後まで打ち込むより一度抜いてコマ吹きを入れ、ビットを交換。プロは「止まり木」を作ってから再挿入します。",
  },
  {
    type: "tool",
    contributorSlug: "archi-editorial",
    slug: "laser-measure-green",
    title: "グリーンレーザー墨出し器 — 屋外でも見える発光と三脚作法",
    brand: "ボッシュ / パナソニック系",
    description:
      "芯の取り方と屋外での補足テク。電動工具より早い工程管理がここから。",
    publishedAt: "2026-04-12",
    badges: [{ label: "現場向け", variant: "safety" }],
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    heroImageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80",
    youtubeVideoId: "9EMtGTEnNMw",
    materials: [
      {
        id: "l1",
        name: "グリーンレーザー墨出し器",
        amazonUrl: "https://www.amazon.co.jp/s?k=グリーンレーザー+墨出し",
      },
      {
        id: "l2",
        name: "調整式三脚 伸長1.6m級",
        amazonUrl: "https://www.amazon.co.jp/s?k=レーザー+三脚",
      },
      {
        id: "l3",
        name: "レーザー受光器（明所用）",
        amazonUrl: "https://www.amazon.co.jp/s?k=レーザー+受光器",
      },
    ],
    steps: [
      {
        step: 1,
        title: "初期芯と直角の出し方",
        body: "壁に仮当てしてから三脚微調整。直角は3-4-5で確認し、レーザー線に芯出しステッカーを貼る。",
      },
      {
        step: 2,
        title: "屋外での視認性確保",
        body: "受光器を使うか、白ボードを当てて反射。直射日光下では時間帯を変えるのが一番の近道。",
      },
    ],
    wisdomTitle: "墨は「一回きりの線」にしない",
    wisdomBody:
      "ホコリや足のブレで芯がズレる前に、ピンクテープで線をキャッチして固定。上棟の日は風でブレるので、ターゲットを線ではなく面で取る。",
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getToolBySlug(slug: string): ToolSpotlight | undefined {
  return tools.find((t) => t.slug === slug);
}
