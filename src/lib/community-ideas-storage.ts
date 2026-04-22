import type { CommunityIdea, IdeaCategory, ImprovementNote } from "@/lib/community-ideas-types";
import { SEED_COMMUNITY_IDEAS } from "@/data/seed-community-ideas";

export const COMMUNITY_IDEAS_STORAGE_KEY = "genbanote-community-ideas-v1";

function cloneSeed(): CommunityIdea[] {
  return JSON.parse(JSON.stringify(SEED_COMMUNITY_IDEAS)) as CommunityIdea[];
}

function normalizeIdea(raw: Partial<CommunityIdea> & { id: string }): CommunityIdea {
  const category: IdeaCategory =
    raw.category === "tool_wish" || raw.category === "wisdom"
      ? raw.category
      : "wisdom";

  return {
    id: raw.id,
    category,
    title: String(raw.title ?? ""),
    body: String(raw.body ?? ""),
    authorLabel: String(raw.authorLabel ?? "匿名"),
    contributorSlug:
      typeof raw.contributorSlug === "string" && raw.contributorSlug.trim()
        ? raw.contributorSlug.trim()
        : undefined,
    createdAt: String(raw.createdAt ?? new Date().toISOString()),
    likes: typeof raw.likes === "number" ? raw.likes : 0,
    likedByViewer: raw.likedByViewer,
    improvements: Array.isArray(raw.improvements) ? raw.improvements : [],
  };
}

export function normalizeIdeasList(list: CommunityIdea[]): CommunityIdea[] {
  return list.map((i) => normalizeIdea(i));
}

/** クライアントのみ。SSR ではシードを返す */
export function loadIdeas(): CommunityIdea[] {
  if (typeof window === "undefined") return cloneSeed();
  try {
    const raw = localStorage.getItem(COMMUNITY_IDEAS_STORAGE_KEY);
    if (!raw) return cloneSeed();
    const parsed = JSON.parse(raw) as CommunityIdea[];
    return normalizeIdeasList(parsed);
  } catch {
    return cloneSeed();
  }
}

/** 旧ローカルストレージキーからの移行 */
export function migrateLegacyIdeasIfNeeded(): void {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem(COMMUNITY_IDEAS_STORAGE_KEY)) return;

    const legacyKeys = [
      "takumipad-community-ideas-v1",
      "archipad-community-ideas-v1",
      "diypad-community-ideas-v2",
      "diypad-community-ideas-v1",
    ] as const;

    for (const key of legacyKeys) {
      const legacy = localStorage.getItem(key);
      if (legacy) {
        localStorage.setItem(COMMUNITY_IDEAS_STORAGE_KEY, legacy);
        return;
      }
    }
  } catch {
    /* noop */
  }
}

export function persistIdeas(ideas: CommunityIdea[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COMMUNITY_IDEAS_STORAGE_KEY, JSON.stringify(ideas));
}

export function toggleLike(ideas: CommunityIdea[], ideaId: string): CommunityIdea[] {
  return ideas.map((idea) => {
    if (idea.id !== ideaId) return idea;
    const liked = idea.likedByViewer;
    return {
      ...idea,
      likedByViewer: !liked,
      likes: Math.max(0, idea.likes + (liked ? -1 : 1)),
    };
  });
}

export function addImprovement(
  ideas: CommunityIdea[],
  ideaId: string,
  body: string,
): CommunityIdea[] {
  const note: ImprovementNote = {
    id: `imp-${globalThis.crypto?.randomUUID?.() ?? Date.now()}`,
    body: body.trim(),
    createdAt: new Date().toISOString(),
  };
  return ideas.map((idea) =>
    idea.id === ideaId
      ? { ...idea, improvements: [...idea.improvements, note] }
      : idea,
  );
}

export function addIdea(
  ideas: CommunityIdea[],
  payload: {
    title: string;
    body: string;
    authorLabel: string;
    category: IdeaCategory;
  },
): CommunityIdea[] {
  const next: CommunityIdea = {
    id: `user-${globalThis.crypto?.randomUUID?.() ?? String(Date.now())}`,
    category: payload.category,
    title: payload.title.trim(),
    body: payload.body.trim(),
    authorLabel: payload.authorLabel.trim() || "匿名",
    createdAt: new Date().toISOString(),
    likes: 0,
    likedByViewer: false,
    improvements: [],
  };
  return [next, ...ideas];
}
