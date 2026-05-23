export type Blog = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  status: number;
  publishDate: string;
  coverImage: string;
  tags: string[];
  body: string;
  updatedDate: string;
  createdDate: string;
};

export type PostKind = 'log' | 'rant' | 'note';

export const KIND_BG: Record<PostKind, string> = {
  log: 'var(--accent)',
  rant: 'var(--ink)',
  note: 'var(--paper)',
};

export const KIND_INK: Record<PostKind, string> = {
  log: 'var(--ink)',
  rant: 'var(--bg)',
  note: 'var(--ink)',
};

const KIND_TAGS: Record<string, PostKind> = {
  rant: 'rant',
  note: 'note',
  notes: 'note',
  log: 'log',
  logs: 'log',
};

const ENDPOINT = 'https://blogsapi.ameys.eu/api/public/Blog';

let cache: Promise<Blog[]> | null = null;

export function fetchBlogs(): Promise<Blog[]> {
  if (!cache) {
    cache = fetch(ENDPOINT)
      .then((r) => {
        if (!r.ok) throw new Error(`blogs api ${r.status}`);
        return r.json() as Promise<Blog[]>;
      })
      .then((items) =>
        items.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))
      )
      .catch((e) => {
        cache = null;
        throw e;
      });
  }
  return cache;
}

export function deriveKind(tags: string[] | undefined): PostKind {
  if (!tags) return 'log';
  for (const t of tags) {
    const k = KIND_TAGS[t.toLowerCase()];
    if (k) return k;
  }
  return 'log';
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d
    .toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' })
    .toLowerCase();
}

export function htmlToPlain(html: string): string {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

export function readingTime(html: string): string {
  const words = htmlToPlain(html).split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}
