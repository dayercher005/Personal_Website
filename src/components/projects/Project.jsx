export default function Project({name, image, projectText, GithubLink, LivePreviewLink}) {
    return(
        <div className="max-w-md h-130 border-gray-200 border rounded-2xl hover:shadow-2xl hover:scale-103 transition">
            <img className="rounded-t-2xl" src={image}/>
            <h1 className="mt-7 ml-6 font-bold text-xl text-gray-700">{name}</h1>
            <p className="mx-6 mt-3 text-gray-500">{projectText}</p>
            <div className="ml-6 mt-5 gap-4 flex">
                <a className="group hover:bg-blue-400 hover:text-white hover:scale-112 flex border py-0.75 px-2 rounded-2xl items-center font-medium transition transition-300" href={GithubLink}>
                    <svg className="group-hover:fill-white transition transition-300 rounded-full p-1" xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 432 416">
                        <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"></path>
                    </svg>Github</a>
                <a className="group hover:bg-blue-400 hover:text-white hover:scale-112 flex items-center border py-0.75 px-2 rounded-2xl font-medium transition transition-300" href={LivePreviewLink}>
                    <svg className="group-hover:fill-white transition transition-300" xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 24 24">
                        <path d="M18 20.75H6A2.75 2.75 0 0 1 3.25 18V6A2.75 2.75 0 0 1 6 3.25h6a.75.75 0 0 1 0 1.5H6A1.25 1.25 0 0 0 4.75 6v12A1.25 1.25 0 0 0 6 19.25h12A1.25 1.25 0 0 0 19.25 18v-6a.75.75 0 0 1 1.5 0v6A2.75 2.75 0 0 1 18 20.75Zm2-12a.76.76 0 0 1-.75-.75V4.75H16a.75.75 0 0 1 0-1.5h4a.76.76 0 0 1 .75.75v4a.76.76 0 0 1-.75.75Z"></path>
                        <path d="M13.5 11.25A.74.74 0 0 1 13 11a.75.75 0 0 1 0-1l6.5-6.5a.75.75 0 1 1 1.06 1.06L14 11a.74.74 0 0 1-.5.25Z"></path>
                    </svg>Live Preview</a>
            </div>
        </div>
    )
}


    
    
