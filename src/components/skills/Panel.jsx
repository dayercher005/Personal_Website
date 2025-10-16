export default function Panel({title, isActive}) {

    return(
        <div>
            <button onClick={isActive} className="text-2xl rounded-2xl bg-slate-400 py-1 px-3 hover:bg-slate-500 hover:scale-105 transition">{title}</button>
        </div>
    )
}