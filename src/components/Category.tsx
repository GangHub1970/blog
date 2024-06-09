"use client";

import React from "react";

type Props = {
  category: string;
  filter: string;
  setFilter: (category: string) => void;
};

export default function Category({ category, filter, setFilter }: Props) {
  const handleClick = () => {
    setFilter(category);
  };
  return (
    <li className={`${filter === category ? "text-blue-500" : ""}`}>
      <button onClick={handleClick}>{category}</button>
    </li>
  );
}
