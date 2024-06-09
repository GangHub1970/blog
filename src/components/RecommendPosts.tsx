import React from "react";
import { getPosts } from "@/service/posts";
import PostItem from "./PostItem";
import { v4 as uuidv4 } from "uuid";
import Slider from "./Slider";

export default async function RecommendPosts() {
  const posts = await getPosts();

  return (
    <section className="my-8">
      <h3 className="mb-2 text-xl font-bold">You may like</h3>
      <article>
        <Slider>
          {posts.map((post) => (
            <PostItem key={uuidv4()} post={post} />
          ))}
        </Slider>
      </article>
    </section>
  );
}
