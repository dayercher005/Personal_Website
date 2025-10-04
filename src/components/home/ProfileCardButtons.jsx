import GithubLogo from '/src/assets/github.svg'
import LinkedinLogo from '/src/assets/linkedin.svg'

export default function ProfileCardButtons (){

    const contactText = "Contact Me"
    const projectText = "Projects"
    
    return (
        <div className="flex align-center items-center gap-5">
            <button className="text-base font-medium rounded-xl border border-blue-400 px-2.5 py-1.5 h-fit">{contactText}</button>
            <button className="text-base font-medium rounded-xl border border-blue-400 px-2.5 py-1.5 h-fit ">{projectText}</button>
            <img src={GithubLogo}></img>
            <img src={LinkedinLogo}></img>
        </div>
    )
}