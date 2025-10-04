import GithubLogo from '/src/assets/github.svg'
import LinkedinLogo from '/src/assets/linkedin.svg'

export default function ProfileCardButtons (){

    const contactText = "Contact Me"
    const projectText = "Projects"
    
    return (
        <div className="flex">
            <button>{contactText}</button>
            <button>{projectText}</button>
            <img src={GithubLogo}></img>
            <img src={LinkedinLogo}></img>
        </div>
    )
}