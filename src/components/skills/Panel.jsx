import React from "react";

export default function Panel({ title, imageURL, isActive }) {
  return (
    <div className="flex justify-center my-3">
      <button
        onClick={isActive}
        className="flex xl:text-xl max-xl:text-lg max-xl:m-1.5 sm:min-w-70 xl:min-w-auto rounded-2xl bg-slate-400 py-2.5 px-4 hover:scale-105 transition gap-3 border-5 hover:shadow-2xl border-slate-400 hover:border-blue-400"
      >
        <img className="size-5 my-auto" src={imageURL}></img>
        {title}
      </button>
    </div>
  );
}
