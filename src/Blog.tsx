import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slab from './primitives/Slab';
import Star from './primitives/Star';
import Sticker from './primitives/Sticker';
import {
  fetchBlogs,
  formatDate,
  readingTime,
  deriveKind,
  type Blog as BlogPost,
  type PostKind,
} from './api/blogs';

const KIND_BG: Record<PostKind, string> = {
  log: 'var(--accent)',
  rant: 'var(--ink)',
  note: 'var(--paper)',
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchBlogs()
      .then((items) => {
        if (cancelled) return;
        const sorted = [...items].sort(
          (a, b) => +new Date(b.published) - +new Date(a.published)
        );
        setPosts(sorted);
      })
      .catch((e) => {
        if (cancelled) return;
        setErr(String(e?.message ?? e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const count = posts?.length ?? 0;

  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="grid-split">
        <Slab bg="var(--paper)" pad={28} style={{ position: 'relative', overflow: 'visible' }}>
          <Star
            size={26}
            color="var(--accent)"
            stroke="var(--rule)"
            style={{ position: 'absolute', top: -14, left: -14 }}
          />
          <div style={{ position: 'absolute', top: 18, right: -12 }}>
            <Sticker bg="var(--ink)" color="var(--bg)" tilt={6}>
              ★ {posts ? `${count} posts` : 'loading…'}
            </Sticker>
          </div>
          <div className="caption">/blog</div>
          <h1
            className="display"
            style={{
              margin: '12px 0 0',
              fontSize: 'clamp(52px, 9vw, 120px)',
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
            }}
          >
            half-<br />baked<br />thoughts.
          </h1>
        </Slab>

        <Slab
          bg="var(--accent)"
          color="var(--accent-ink)"
          pad={28}
          style={{ position: 'relative', overflow: 'visible' }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(var(--accent-ink) 1.2px, transparent 1.2px)',
              backgroundSize: '14px 14px',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
          <Star
            size={22}
            color="var(--ink)"
            stroke="var(--ink)"
            style={{ position: 'absolute', bottom: 18, right: 18 }}
          />
          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', position: 'relative' }}>
            rss · atom · email
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 14, marginBottom: 0, position: 'relative' }}>
            fresh thoughts, straight outta my head. some are rants, some are logs from building things that
            don&rsquo;t work yet. no newsletter. no take-aways. just writing to think.
          </p>
        </Slab>
      </section>

      <Slab bg="var(--paper)" pad={0}>
        {err && <StateRow>couldn&rsquo;t fetch posts — {err}</StateRow>}
        {!err && !posts && <StateRow>fetching posts…</StateRow>}
        {!err && posts && posts.length === 0 && <StateRow>no posts yet.</StateRow>}
        {!err && posts && posts.map((p, i) => (
          <PostRow key={p.slug} post={p} last={i === posts.length - 1} />
        ))}
      </Slab>
    </div>
  );
}

function StateRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono caption" style={{ padding: '26px 22px' }}>
      {children}
    </div>
  );
}

function PostRow({ post, last }: { post: BlogPost; last: boolean }) {
  const kind = deriveKind(post.tags);
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="row-post"
      style={{ borderBottom: last ? 'none' : 'var(--border) solid var(--rule)' }}
    >
      <div
        className="mono row-post-date caption"
        style={{ padding: '16px 18px', borderRight: 'var(--border) solid var(--rule)', fontSize: 12, letterSpacing: '0.12em' }}
      >
        {formatDate(post.published)}
      </div>
      <div style={{ padding: '16px 14px', borderRight: 'var(--border) solid var(--rule)' }}>
        <span
          className="mono"
          style={{
            display: 'inline-block',
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            padding: '3px 8px',
            border: '2px solid currentColor',
            background: KIND_BG[kind],
            color: kind === 'rant' ? 'var(--bg)' : 'var(--ink)',
          }}
        >
          {kind}
        </span>
      </div>
      <div style={{ padding: '14px 18px' }}>
        <div style={{ fontSize: 17, fontWeight: 600 }}>{post.title}</div>
        <div className="mono row-post-subhead" style={{ fontSize: 11, marginTop: 3 }}>
          {post.subHeading}
        </div>
      </div>
      <div className="mono row-post-reading caption" style={{ padding: '0 18px', letterSpacing: '0.12em' }}>
        {readingTime(post.bodyPlain)}
        <span aria-hidden className="row-post-arrow">→</span>
      </div>
    </Link>
  );
}
