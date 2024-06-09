import React from "react";
import FilteredPosts from "@/components/FilteredPosts";
import { getPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="flex m-8">
      <FilteredPosts AllPosts={posts} />
    </div>
  );
}
