"use client";

import React, { useState } from "react";
import Form from "./Form";

export type ShowToastType = {
  isShow: boolean;
  message: string;
};

export default function EmailForm() {
  const [showToast, setShowToast] = useState<ShowToastType>({
    isShow: false,
    message: "",
  });

  return (
    <article className="flex flex-col items-center gap-4 mt-8">
      {showToast.isShow && (
        <p className="px-4 py-2 bg-green-200 rounded">{showToast.message}</p>
      )}
      <Form setShowToast={setShowToast} />
    </article>
  );
}
