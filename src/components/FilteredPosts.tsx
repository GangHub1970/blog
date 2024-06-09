"use client";

import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import CategoryBar from "./CategoryBar";
import { Post } from "@/service/posts";

type Props = {
  AllPosts: Post[];
};

export default function FilteredPosts({ AllPosts }: Props) {
  const [filter, setFilter] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(AllPosts);

  useEffect(() => {
    if (filter === "All") {
      setFilteredPosts(AllPosts);
      return;
    }

    setFilteredPosts(AllPosts.filter((post) => post.category === filter));
  }, [filter]);
  return (
    <>
      <Posts posts={filteredPosts} />
      <CategoryBar filter={filter} setFilter={setFilter} />
    </>
  );
}
