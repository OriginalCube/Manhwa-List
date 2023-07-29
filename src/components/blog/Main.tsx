"use client";

import React from "react";
import Review from "./Review";

export default function Main() {
  const [isReview, setIsReview] = React.useState(true);
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <Review />
    </div>
  );
}
