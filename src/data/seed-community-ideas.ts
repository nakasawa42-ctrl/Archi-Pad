import type { CommunityIdea } from "@/lib/community-ideas-types";

export const SEED_COMMUNITY_IDEAS: CommunityIdea[] = [
  {
    id: "seed-1",
    category: "wisdom",
    title: "廃止ランバーを「仮の敷板」に再利用する際のすべり止め溝",
    body:
      "現場に転がっている短尺をつなぎ足し、クランプで板を渡すだけの仮作業台に。溝は電動丸ノコで二度切り、奥行き3mmで十分止まる。",
    authorLabel: "大工見習い・渋谷",
    contributorSlug: "shibuya-apprentice",
    createdAt: "2026-04-10T08:00:00.000Z",
    likes: 14,
    improvements: [
      {
        id: "imp-1",
        body: "ノンスリップテープを渡し寸法だけ貼る手もアリ。塗装後は剥がしやすい。",
        createdAt: "2026-04-11T02:00:00.000Z",
      },
    ],
  },
  {
    id: "seed-2",
    category: "wisdom",
    title: "Cチャン端の耳をペンチで軽く伏せると、ボード当たりが柔らかい",
    body:
      "仕上げクロスの見え割れ対策。ただし塗装環境では静電と粉対策を忘れずに。危険なら金ハンで済ませる。",
    authorLabel: "匿名希望",
    createdAt: "2026-04-12T10:30:00.000Z",
    likes: 31,
    improvements: [],
  },
  {
    id: "seed-wish-1",
    category: "tool_wish",
    title:
      "こんな道具が欲しい：墨つぼ糸を『張力一定』で出すミニワインダー",
    body:
      "片手で糸を引き出しながら張力が一定になる仕組みが欲しい。釣りのリールみたいに小さく。既製品が無ければ3Dプリントで試したい。",
    authorLabel: "内装チームα",
    contributorSlug: "team-alpha",
    createdAt: "2026-04-13T12:00:00.000Z",
    likes: 68,
    improvements: [
      {
        id: "imp-w1",
        body: "ばね定数と糸径で遊ぶより、ダンパー＋細ピニオン機構の方が再現性出そう。",
        createdAt: "2026-04-13T18:00:00.000Z",
      },
    ],
  },
  {
    id: "seed-3",
    category: "wisdom",
    title: "墨出しレーザーの三脚、脚先にフェルト貼りで床キズ激減",
    body: "薄手のフェルトを瞬間で。現場で余ったら交換。重量分散にもなる。",
    authorLabel: "内装・K",
    contributorSlug: "interior-k",
    createdAt: "2026-04-14T15:00:00.000Z",
    likes: 22,
    improvements: [
      {
        id: "imp-2",
        body: "雨日向けはフェルトが水分を吸うので、屋外は防水シート足して二重に。",
        createdAt: "2026-04-15T01:20:00.000Z",
      },
      {
        id: "imp-3",
        body: "フェルトの厚みでレベルが変わるので、その分ラインを再確認を。",
        createdAt: "2026-04-16T09:00:00.000Z",
      },
    ],
  },
];
