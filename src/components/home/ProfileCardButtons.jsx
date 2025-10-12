export default function ProfileCardButtons (){

    const contactText = "Contact Me"
    const projectText = "Projects"
    
    return (
        <div className="flex align-center items-center gap-5">
            <button className="text-base font-medium rounded-xl border border-gray-400 px-2.5 py-1.5 h-fit hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:scale-110 transition transition-300">{contactText}</button>
            <a href="#Projects" className="text-base font-medium rounded-xl border border-gray-400 px-2.5 py-1.5 h-fit hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:scale-110 transition transition-300">{projectText}</a>
            <a target="_blank" href="https://github.com/dayercher005"><svg className="hover:scale-110 hover:bg-gray-900 transition transition-300 rounded-full p-2 hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 432 416">
                <path d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"></path>
            </svg></a>
            <a href="https://www.linkedin.com/in/dayer-cher-9a9a14231/" target="_blank"><svg className="hover:scale-110 border border-gray-400 rounded-full p-2 hover:bg-sky-600 hover:border-sky-600 hover:fill-white transition transition-300" xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 432 432">
                <path d="M319 221.5q-8-10.5-30-10.5q-27 0-38 16t-11 45v146q0 5-3 8t-8 3h-76q-4 0-7.5-3t-3.5-8V148q0-4 3.5-7.5t7.5-3.5h74q4 0 6.5 2t3.5 6v5q1 2 1 7q28-27 76-27q53 0 83 27t30 79v182q0 5-3.5 8t-7.5 3h-78q-4 0-7.5-3t-3.5-8V254q0-22-8-32.5zM88 91.5Q73 107 51.5 107T15 91.5t-15-37T15 18T51.5 3T88 18t15 36.5t-15 37zm13 56.5v270q0 5-3.5 8t-7.5 3H14q-5 0-8-3t-3-8V148q0-4 3-7.5t8-3.5h76q4 0 7.5 3.5t3.5 7.5z"></path>
            </svg></a>
    
        </div>
    )
}