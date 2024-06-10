import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public", "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getPost(postPath: string): Promise<Post> {
  const posts = await getPosts();

  return posts.find((post) => post.path === postPath) as Post;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();

  return posts.filter((post) => post.featured);
}

export async function getMarkdownPost(postPath: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "posts",
    `${postPath}.md`
  );
  const data = await fs.readFile(filePath, "utf-8");

  return data;
}
