type NewsProps = {
  setIsReview: (res: boolean) => void;
  submitNews: (form: FormData, key : string) => void;
};

export default function News({ setIsReview, submitNews }: NewsProps) {
  
  const onSubmit = (e : FormData) =>{
    submitNews(e, localStorage.getItem("manhwa-list") || "");
  }  

  return (
    <div className="h-auto w-4/6 flex gap-4 flex-col text-white">
      <div className="w-full h-auto">
        <p className="text-6xl font-normal text-blue-300 py-4">
          Create news report{" "}
          <span
            onClick={() => setIsReview(true)}
            className="text-sm p-2 hover:text-slate-800 
          px-4 border-2 border-blue-300 rounded-full hover:bg-blue-300 cursor-pointer"
          >
            Create Review
          </span>
        </p>
      </div>
      <form action={onSubmit} className="w-full h-auto flex flex-col gap-12">
        <fieldset>
          <legend className="text-xl py-1">News title</legend>
          <input
            className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
            type="text"
            name="title"
            title="name"
          />
        </fieldset>
        <fieldset>
          <legend className="text-xl py-1">Description</legend>
          <input
            className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
            type="text"
            name="description"
            title="description"
          />
        </fieldset>
        <button
          type="submit"
          className="w-auto h-auto text-xl p-2 px-4 border-2 
        border-slate-300 rounded-md hover:bg-slate-300 hover:text-slate-900"
        >
          Create
        </button>
      </form>
    </div>
  );
}
