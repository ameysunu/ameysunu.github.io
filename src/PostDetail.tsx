import { useParams, Link } from 'react-router-dom';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Slab from './primitives/Slab';
import Star from './primitives/Star';
import Sticker from './primitives/Sticker';
import NotFound from './404';
import {
  formatDate,
  readingTime,
  deriveKind,
  KIND_BG,
  KIND_INK,
  type Blog as BlogPost,
} from './api/blogs';
import { usePosts } from './hooks/usePosts';

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
  const { posts, err } = usePosts();

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
        <Link to="/blog" className="back-btn mono">
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
                  className="mono post-tag"
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
          <div className="post-footer">
            <span className="mono caption post-footer__end">
              <Star size={12} color="var(--accent)" stroke="var(--rule)" />
              end of transmission
            </span>
            <span className="mono caption post-footer__author">
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
      className="post-nav-link"
      style={{ textAlign: align }}
    >
      <div className="caption">{label}</div>
      <div className="display" style={{ marginTop: 8, fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        {post.title}
      </div>
    </Link>
  );
}
