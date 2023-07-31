"use client";
import ReviewCard from "./ReviewCard";
import NewCard from "./NewCard";
import React from 'react'
import axios from "axios";

export default function Main() {
  const [reviews, setReviews] = React.useState<any[]>([]);

  const getReviews = async() =>{
    const getData = await axios.get("/api/reviews");
    setReviews(getData.data.message);
  }

  React.useEffect(()=>{
    console.log(reviews);
  },[reviews])

  React.useEffect(()=>{
    getReviews();
  },[])

  return (
    <div className="w-3/4 h-auto flex flex-col items-center justify-center gap-2">
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Reviews</p>
      </div>
      <div className="h-auto w-full flex gap-2 items-center justify-start">
        {reviews ? reviews.map((e:any, index:number)=> <ReviewCard title={e.title} ratings={e.rating} image={e.image}/>):null}
      </div>
      <div className="h-12 w-full">
        <p className="text-3xl font-medium p-1">Recently Uploaded Blogs</p>
      </div>
      <div className="h-auto w-full">
        <NewCard title={"New hiatus"} description={"Anotha one"} author={"Cube"} profile={"profile7"}/>
      </div>
    </div>
  );
}
