"use client";
import ReviewCard from "./ReviewCard";
import NewCard from "./NewCard";
import React from "react";
import axios from "axios";

export default function Main() {
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [news, setNews] = React.useState<any[]>([]);

  const getReviews = async () => {
    const getData = await axios.get("/api/reviews");
    setReviews(getData.data.message);
  };

  const getNews = async () => {
    const getData = await axios.get("/api/news");
    setNews(getData.data.message);
  };

  React.useEffect(() => {
    getNews();
    getReviews();
  }, []);

  React.useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-10">
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Reviews</p>
      </div>
      <div className="h-auto w-full flex gap-12 items-center justify-start">
        {reviews
          ? reviews.map((e: any, index: number) => (
              <ReviewCard
                genre={e.genre}
                title={e.title}
                ratings={e.rating}
                image={e.image}
              />
            ))
          : null}
      </div>
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Blogs</p>
      </div>
      <div className="h-auto w-full flex flex-col gap-10 mb-10">
        {news
          ? news.map((e: any, index: number) => (
              <NewCard
                title={e.title}
                description={e.description}
                author={e.author}
                profile={e.profile}
              />
            ))
          : null}
      </div>
    </div>
  );
}
