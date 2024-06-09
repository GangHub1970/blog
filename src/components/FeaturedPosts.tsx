import React from "react";
import { getPosts } from "@/service/posts";
import { v4 as uuidv4 } from "uuid";
import PostItem from "./PostItem";

export default async function FeaturedPosts() {
  const posts = await getPosts();

  return (
    <section className="mt-8">
      <h3 className="mb-2 text-xl font-bold">Featured Posts</h3>
      <article>
        <ul className="flex flex-wrap gap-4">
          {posts
            .filter(({ featured }) => featured)
            .map((post) => (
              <PostItem key={uuidv4()} post={post} />
            ))}
        </ul>
      </article>
    </section>
  );
}