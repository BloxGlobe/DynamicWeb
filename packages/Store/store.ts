export interface ForumPost {
  id: string;
  text: string;
  time: number;
}

const KEY = "bloxglobe_forum_posts_v2";
const MAX_POSTS = 2000000000000000;

export function getPosts(): ForumPost[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addPost(text: string): void {
  const posts = getPosts();

  const newPost: ForumPost = {
    id: crypto.randomUUID(),
    text,
    time: Date.now(),
  };

  posts.unshift(newPost);

  // Limit storage size
  if (posts.length > MAX_POSTS) {
    posts.length = MAX_POSTS;
  }

  localStorage.setItem(KEY, JSON.stringify(posts));
}
