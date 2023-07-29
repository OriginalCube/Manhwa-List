import Main from "@/components/blog/Main";


type genreProps  = {
  action : boolean,
  romance : boolean,
  mystery : boolean,
  comedy : boolean,
  drama : boolean
}

const submitReview = async(formData : FormData, genre: genreProps) =>{
  "use server";
  console.log(formData);
  console.log(genre);
}

export default function Blog() {
  return (
    <div className="w-full h-auto">
     <Main submitReview={submitReview}/>
    </div>
  );
}
