import type { PublicContributorProfile } from "@/lib/contributors-schema";

export const CONTRIBUTORS: PublicContributorProfile[] = [
  {
    slug: "deshi-memo",
    displayName: "徒弟メモ（師匠の現場より）",
    title: "内装見切り・軽天まわりの系譜を継ぐ投稿者",
    bio:
      "現場の弟子総出で、アングルと納まりの話を文章に落としている名義。写真より身体で覚えた手順を、次の世代にそのまま渡すことを重んじています。",
    region: "北海道〜東北の現場出身",
    level: 12,
    xpCurrent: 420,
    xpToNextLevel: 600,
    stats: {
      publishedRecipes: 1,
      publishedToolReviews: 0,
      communityIdeasCount: 0,
      likesFromCommunity: 0,
    },
    achievements: [
      {
        id: "a1",
        kind: "heritage",
        label: "系譜の継承者",
        description: "名工の現場メモをレシピとして初掲載",
        earnedAt: "2026-04-01T00:00:00.000Z",
      },
      {
        id: "a2",
        kind: "first_recipe",
        label: "初投稿レシピ",
        description: "塩ビ見切りレシピを公開",
        earnedAt: "2026-04-10T00:00:00.000Z",
      },
    ],
    memberSince: "2025-12-01T00:00:00.000Z",
  },
  {
    slug: "densho-record",
    displayName: "伝承録（匿名の先達を敬う）",
    title: "軽天・鉄壁定規の系譜",
    bio:
      "引退した先達から受け継いだ手順を、弟子メモの形で残す名義。名前より現場への敬意と、再現可能な一手を優先しています。",
    level: 11,
    xpCurrent: 390,
    xpToNextLevel: 580,
    stats: {
      publishedRecipes: 1,
      publishedToolReviews: 0,
      communityIdeasCount: 0,
      likesFromCommunity: 0,
    },
    achievements: [
      {
        id: "a-densho",
        kind: "heritage",
        label: "系譜ストーリー",
        description: "名工の系譜として C38 鉄壁定規レシピを掲載",
        earnedAt: "2026-04-22T00:00:00.000Z",
      },
    ],
    memberSince: "2026-01-05T00:00:00.000Z",
  },
  {
    slug: "sho-sato",
    displayName: "佐藤（大工）",
    title: "木造作・壁付け収納",
    bio: "躯体と木の湿り気の噛み合わせを仕事にしている大工。ビスのさし角とランバーのねじれに神経を使うタイプです。",
    region: "関東",
    level: 9,
    xpCurrent: 310,
    xpToNextLevel: 500,
    stats: {
      publishedRecipes: 1,
      publishedToolReviews: 0,
      communityIdeasCount: 0,
      likesFromCommunity: 0,
    },
    achievements: [
      {
        id: "a3",
        kind: "safety_champion",
        label: "納まり重視",
        description: "壁付け棚レシピで安全・耐久の視点を明記",
        earnedAt: "2026-04-18T00:00:00.000Z",
      },
    ],
    memberSince: "2026-03-15T00:00:00.000Z",
  },
  {
    slug: "tanaka-zosaku",
    displayName: "田中（造作家具）",
    title: "合板・初心者向け収納レシピ",
    bio: "現場の余材と短時間で組める家具を好む。図面より口頭の手順を整えるのが得意です。",
    level: 7,
    xpCurrent: 180,
    xpToNextLevel: 400,
    stats: {
      publishedRecipes: 1,
      publishedToolReviews: 0,
      communityIdeasCount: 0,
      likesFromCommunity: 0,
    },
    achievements: [
      {
        id: "a4",
        kind: "first_recipe",
        label: "初心者ラック",
        description: "ビス本数を抑えたツールラック掲載",
        earnedAt: "2026-04-15T00:00:00.000Z",
      },
    ],
    memberSince: "2026-02-20T00:00:00.000Z",
  },
  {
    slug: "takumi-editorial",
    displayName: "タクミパッド編集部",
    title: "工具レビュー・比較の公式視点",
    bio:
      "メーカー非依存で、音・トルク・ラインの見え方まで現場言葉でまとめています。収益化や分配の設計もここから広げます。",
    level: 15,
    xpCurrent: 900,
    xpToNextLevel: 1000,
    stats: {
      publishedRecipes: 0,
      publishedToolReviews: 2,
      communityIdeasCount: 0,
      likesFromCommunity: 0,
    },
    achievements: [
      {
        id: "a5",
        kind: "tool_master",
        label: "工具スポットライト",
        description: "インパクト・レーザー墨出しの深掘り掲載",
        earnedAt: "2026-04-12T00:00:00.000Z",
      },
    ],
    memberSince: "2025-06-01T00:00:00.000Z",
  },
  {
    slug: "shibuya-apprentice",
    displayName: "大工見習い・渋谷",
    title: "掲示板からの現場知恵",
    bio: "短尺ランバーの再利用ネタなど、軽いノウハウを共有中。正式登録後は XP と分配にも接続予定。",
    level: 3,
    xpCurrent: 90,
    xpToNextLevel: 200,
    stats: {
      publishedRecipes: 0,
      publishedToolReviews: 0,
      communityIdeasCount: 1,
      likesFromCommunity: 14,
    },
    achievements: [
      {
        id: "a6",
        kind: "community_star",
        label: "掲示板デビュー",
        description: "シード投稿でいいねを獲得",
        earnedAt: "2026-04-10T00:00:00.000Z",
      },
    ],
    memberSince: "2026-04-10T00:00:00.000Z",
  },
  {
    slug: "team-alpha",
    displayName: "内装チームα",
    title: "道具リクエスト（掲示板）",
    bio: "墨つぼ糸のワインダー案など、「こんな道具が欲しい」の声を上げるチーム名義。製品化の窓口と繋ぎやすいよう slug を付与しています。",
    level: 4,
    xpCurrent: 120,
    xpToNextLevel: 250,
    stats: {
      publishedRecipes: 0,
      publishedToolReviews: 0,
      communityIdeasCount: 1,
      likesFromCommunity: 68,
    },
    achievements: [
      {
        id: "a7",
        kind: "community_star",
        label: "リクエスト急上昇",
        description: "道具wish投稿で高い関心を獲得",
        earnedAt: "2026-04-13T00:00:00.000Z",
      },
    ],
    memberSince: "2026-04-13T00:00:00.000Z",
  },
  {
    slug: "interior-k",
    displayName: "内装・K",
    title: "掲示板 · 現場の小ワザ",
    bio: "レーザー三脚のフェルトなど、ささっと効く改善を書き溜めています。",
    level: 5,
    xpCurrent: 150,
    xpToNextLevel: 280,
    stats: {
      publishedRecipes: 0,
      publishedToolReviews: 0,
      communityIdeasCount: 1,
      likesFromCommunity: 22,
    },
    achievements: [
      {
        id: "a8",
        kind: "community_star",
        label: "改善スレ参加",
        description: "複数の改善コメントが付いた投稿",
        earnedAt: "2026-04-14T00:00:00.000Z",
      },
    ],
    memberSince: "2026-04-14T00:00:00.000Z",
  },
];

const bySlug = new Map(CONTRIBUTORS.map((c) => [c.slug, c]));

export function getContributorBySlug(slug: string): PublicContributorProfile | undefined {
  return bySlug.get(slug);
}

export function listContributorSlugs(): string[] {
  return CONTRIBUTORS.map((c) => c.slug);
}
