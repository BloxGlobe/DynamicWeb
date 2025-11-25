// packages/Store/store.ts

export interface ForumPost {
  text: string;
  time: number;
}

const KEY = "bloxglobe_forum_posts";

// Load posts
export function getPosts(): ForumPost[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

// Add post
export function addPost(text: string): void {
  const posts = getPosts();
  posts.unshift({
    text,
    time: Date.now(),
  });
  localStorage.setItem(KEY, JSON.stringify(posts));
}
