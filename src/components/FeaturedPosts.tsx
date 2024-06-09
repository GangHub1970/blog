import React from "react";
import { getFeaturedPosts } from "@/service/posts";
import Posts from "./Posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mt-8">
      <h3 className="mb-2 text-xl font-bold">Featured Posts</h3>
      <Posts posts={posts} />
    </section>
  );
}
