import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Slab from './primitives/Slab';
import Star from './primitives/Star';
import Sticker from './primitives/Sticker';
import NotFound from './404';
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

const KIND_INK: Record<PostKind, string> = {
  log: 'var(--ink)',
  rant: 'var(--bg)',
  note: 'var(--ink)',
};

const ptComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href: string = value?.href ?? '#';
      const external = /^https?:/.test(href);
      return (
        <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
          {children}
        </a>
      );
    },
  },
};

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
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

  if (err) return <StateNotice>couldn&rsquo;t fetch post — {err}</StateNotice>;
  if (!posts) return <StateNotice>fetching…</StateNotice>;

  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx < 0) return <NotFound />;

  const post = posts[idx];
  const prev = posts[idx + 1];
  const next = posts[idx - 1];
  const kind = deriveKind(post.tags);

  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <Link
          to="/blog"
          className="mono"
          style={{
            textDecoration: 'none',
            background: 'var(--paper)',
            color: 'var(--ink)',
            border: 'var(--border) solid var(--rule)',
            boxShadow: '4px 4px 0 0 var(--rule)',
            padding: '8px 14px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          ← back to blog
        </Link>
        <span className="caption">/blog / {post.slug}</span>
      </div>

      <Slab bg="var(--paper)" pad={0} style={{ position: 'relative', overflow: 'visible' }}>
        <div style={{ position: 'absolute', top: -14, right: 24, zIndex: 3 }}>
          <Sticker bg={KIND_BG[kind]} color={KIND_INK[kind]} tilt={-6}>
            ★ {kind}
          </Sticker>
        </div>
        <Star
          size={22}
          color="var(--accent)"
          stroke="var(--rule)"
          style={{ position: 'absolute', bottom: -12, left: -12, zIndex: 3 }}
        />

        <div
          className="postdetail-meta"
          style={{ padding: '22px 28px', borderBottom: 'var(--border) solid var(--rule)' }}
        >
          <span className="mono caption">{formatDate(post.published)}</span>
          <span className="mono caption">{readingTime(post.bodyPlain)} read</span>
        </div>

        <div style={{ padding: '28px 32px 36px' }}>
          <h1
            className="display"
            style={{
              margin: 0,
              fontSize: 'clamp(40px, 6.2vw, 84px)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            }}
          >
            {post.title}
          </h1>
          <p className="mono" style={{ marginTop: 18, marginBottom: 0, fontSize: 15, color: 'var(--muted)', maxWidth: 640 }}>
            {post.subHeading}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="mono caption"
                  style={{
                    padding: '4px 10px',
                    border: 'var(--border) solid var(--rule)',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Slab>

      <Slab bg="var(--paper)" pad={0}>
        <article
          className="pt-body"
          style={{
            padding: 'clamp(26px, 4vw, 44px) clamp(26px, 6vw, 72px)',
            maxWidth: 780,
            margin: '0 auto',
            fontSize: 17,
            lineHeight: 1.7,
          }}
        >
          <PortableText value={post.body} components={ptComponents} />
          <div
            style={{
              marginTop: 36,
              paddingTop: 20,
              borderTop: 'var(--border) solid var(--rule)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <span className="mono caption" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Star size={12} color="var(--accent)" stroke="var(--rule)" />
              end of transmission
            </span>
            <span className="mono caption" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {post.author?.imageUrl && (
                <img
                  src={post.author.imageUrl}
                  alt=""
                  style={{ width: 22, height: 22, border: 'var(--border) solid var(--rule)', objectFit: 'cover' }}
                />
              )}
              written by {post.author?.name?.toLowerCase() ?? 'amey'} · dublin
            </span>
          </div>
        </article>
      </Slab>

      <div className="grid-postnav">
        <PostNav post={prev} label="← previous" />
        <PostNav post={next} label="next →" align="right" />
      </div>
    </div>
  );
}

function StateNotice({ children }: { children: React.ReactNode }) {
  return (
    <Slab bg="var(--paper)" pad={28}>
      <div className="mono caption">{children}</div>
    </Slab>
  );
}

function PostNav({
  post,
  label,
  align = 'left',
}: {
  post: BlogPost | undefined;
  label: string;
  align?: 'left' | 'right';
}) {
  if (!post) return <div />;
  return (
    <Link
      to={`/blog/${post.slug}`}
      style={{
        textDecoration: 'none',
        color: 'var(--ink)',
        border: 'var(--border) solid var(--rule)',
        boxShadow: 'var(--shadow) var(--shadow) 0 0 var(--rule)',
        background: 'var(--paper)',
        padding: '18px 22px',
        display: 'block',
        textAlign: align,
      }}
    >
      <div className="caption">{label}</div>
      <div className="display" style={{ marginTop: 8, fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        {post.title}
      </div>
    </Link>
  );
}
