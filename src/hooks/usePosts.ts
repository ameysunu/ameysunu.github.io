import { useEffect, useState } from 'react';
import { fetchBlogs, type Blog } from '../api/blogs';

export function usePosts() {
  const [posts, setPosts] = useState<Blog[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchBlogs()
      .then((items) => { if (!cancelled) setPosts(items); })
      .catch((e) => { if (!cancelled) setErr(String(e?.message ?? e)); });
    return () => { cancelled = true; };
  }, []);

  return { posts, err };
}
