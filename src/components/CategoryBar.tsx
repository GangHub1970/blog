import React from "react";
import { v4 as uuidv4 } from "uuid";
import Category from "./Category";

type Props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const categories = ["All", "my story", "frontend", "backend", "javascript"];

export default function CategoryBar({ filter, setFilter }: Props) {
  return (
    <aside className="sticky top-0 p-8 h-full">
      <h2 className="text-xl font-bold border-b-2 border-blue-500">Category</h2>
      <ul className="my-4 text-center">
        {categories.map((category) => (
          <Category
            key={uuidv4()}
            category={category}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </ul>
    </aside>
  );
}
