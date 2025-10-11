export default function Project({name, image, projectText, GithubLink, LivePreviewLink}) {
    return(
        <div className="max-w-md h-130 border-gray-200 border rounded-2xl hover:shadow-2xl hover:scale-103 transition">
            <img className="rounded-t-2xl" src={image}/>
            <h1 className="mt-7 ml-6 font-bold text-xl text-gray-700">{name}</h1>
            <p className="mx-6 mt-3 text-gray-500">{projectText}</p>
            <div>
                <a className="" href={GithubLink}></a>
                <a className="border" href={LivePreviewLink}>Live Preview</a>
            </div>
        </div>
    )
}