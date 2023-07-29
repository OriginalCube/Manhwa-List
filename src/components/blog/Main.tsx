"use client";

import React from "react";
import Review from "./Review";

type MainProps = {
  submitReview: (
    formData: FormData,
    genre: {
      action: boolean;
      romance: boolean;
      mystery: boolean;
      comedy: boolean;
      drama: boolean;
    },
  ) => void;
};

export default function Main({ submitReview }: MainProps) {
  const [isReview, setIsReview] = React.useState(true);
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <Review submitReview={submitReview} />
    </div>
  );
}
