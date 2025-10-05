import GithubLogo from '/src/assets/github.svg'
import LinkedinLogo from '/src/assets/linkedin.svg'

export default function ProfileCardButtons (){

    const contactText = "Contact Me"
    const projectText = "Projects"
    
    return (
        <div className="flex align-center items-center gap-5">
            <button className="text-base font-medium rounded-xl border border-gray-400 px-2.5 py-1.5 h-fit hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:scale-110 transition">{contactText}</button>
            <button className="text-base font-medium rounded-xl border border-gray-400 px-2.5 py-1.5 h-fit hover:bg-blue-400 hover:text-white hover:border-blue-400 hover:scale-110 transition">{projectText}</button>
            <img className="border-gray-400 border rounded-full p-3 h-15 hover:bg-blue-400 hover:border-blue-400 hover:scale-110 transition" src={GithubLogo}></img>
            <img className="border-gray-400 border rounded-full p-3 h-15 hover:bg-blue-400 hover:border-blue-400 hover:scale-110 transition" src={LinkedinLogo}></img>
        </div>
    )
}