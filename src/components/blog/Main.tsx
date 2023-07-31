"use client";

import React from "react";
import Review from "./Review";
import News from "./News";

type MainProps = {
  submitReview: (
    formData: FormData,
    genre: {
      action: boolean;
      romance: boolean;
      mystery: boolean;
      comedy: boolean;
      drama: boolean;
    }, key : string,
  ) => void;
  submitNews: (form: FormData, key : string) => void;
};

export default function Main({ submitReview, submitNews }: MainProps) {
  const [isReview, setIsReview] = React.useState(true);
  return (
    <div className="w-full h-auto flex items-center justify-center">
      {isReview ? (
        <Review submitReview={submitReview} setIsReview={setIsReview} />
      ) : (
        <News setIsReview={setIsReview} submitNews={submitNews} />
      )}
    </div>
  );
}
