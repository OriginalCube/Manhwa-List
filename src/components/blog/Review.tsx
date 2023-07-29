import React from 'react';

export default function Review() {

  const [genre, setGenre] = React.useState({
    action : false,
    romance : false,
    mystery : false,
    comedy : false,
    drama : false
  })

  const onSubmit = (e:FormData) => {
    console.log(e.get("genre"))
  }
  return (
    <div className="w-4/6 h-auto flex flex-col gap-4">
      <div className="flex w-full h-auto">
        <p className="text-6xl font-normal text-blue-300 py-4">
          Create Manhwa Review
        </p>
      </div>
      <form action={onSubmit} className="text-white w-full h-auto flex flex-col gap-4">
        <div className="w-full h-auto flex gap-4">
          <div className="w-1/2 h-auto flex flex-col gap-10">
            <fieldset>
              <legend className="py-1 text-xl">Manhwa's name</legend>
              <input
                className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
                type="text"
                title="name"
                name="name"
              />
            </fieldset>
            <fieldset>
              <legend className="py-1 text-xl">Author's name</legend>
              <input
                className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
                type="text"
                title="author"
                name="author"
              />
            </fieldset>
            <fieldset>
              <legend className="py-1 text-xl">Manhwa's description</legend>
              <input
                className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
                type="text"
                title="description"
                name="description"
              />
            </fieldset>
            <fieldset>
              <legend className="py-1 text-xl">
                Manhwa's Rating{" "}
                <span className="text-xs font-medium text-green-500">
                  Lowest being 0, highest being 10.
                </span>
              </legend>
              <input
                className="w-full h-10 bg-slate-700 rounded-sm shadows-md outline-none text-white p-2"
                type="number"
                min={0}
                max={10}
                title="rating"
                name="rating"
              />
            </fieldset>
            <fieldset>
              <legend className="py-1 text-xl">Manhwa's Genre</legend>
              <div className="flex flex-wrap text-xl">
                <div className="w-1/4 h-auto flex gap-2 p-3 rounded-md">
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre.action?"true" : "false"}
                    onChange={(e)=> setGenre({...genre,action : e.target.value==="true"? true : false})} 
                    title="genre"
                  />
                  <label className="text-xl">Action</label>
                </div>
                <div className="w-1/4 h-auto flex gap-2 p-3 rounded-md">
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre.romance?"true" : "false"}
                    onChange={(e)=> setGenre({...genre,romance: e.target.value==="true"? true : false})} 
                    title="genre"
                  />
                  <label className="text-xl">Romance</label>
                </div>
                <div className="w-1/4 h-auto flex gap-2 p-3 rounded-md">
                  <input
                    type="checkbox"
                    name="genre"
                    value={"mystery"}
                    title="genre"
                  />
                  <label className="text-xl">Mystery</label>
                </div>
                <div className="w-1/4 h-auto flex gap-2 p-3 rounded-md">
                  <input
                    type="checkbox"
                    name="genre"
                    value={"comedy"}
                    title="genre"
                  />
                  <label className="text-xl">Comedy</label>
                </div>
                <div className="w-1/4 h-auto flex gap-2 p-3 rounded-md">
                  <input
                    type="checkbox"
                    name="genre"
                    value={"drama"}
                    title="genre"
                  />
                  <label className="text-xl">Drama</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="w-1/2 h-auto"></div>
        </div>
        <button type="submit" className="w-auto h-auto text-xl p-2 px-4 border-2 
        border-slate-300 rounded-md hover:bg-slate-300 hover:text-slate-900">Create</button>
      </form>
    </div>
  );
}
