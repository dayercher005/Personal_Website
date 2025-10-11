import Project from './Project.jsx'
import MemoryCardGame from '/public/MemoryCardGame.png'
import CvApplication from '/public/CvApplication.png'
import RestaurantPage from '/public/RestaurantPage.png'

export default function Projects(){

    const projectMemoryCardText = "Interactive React-based memory card game where players gain points from clicking cards previously not clicked. Built to strengthen my understanding of React hooks and effects."
    const projectMemoryCardGithub = "https://github.com/dayercher005/Memory-Card-Game"
    const projectMemoryCardLivePreview = "https://memory-card-game-phi-plum.vercel.app/"

    const projectCvApplicationText = "React application that allows users to create and preview professional CVs dynamically. The tool features editable input fields for personal details, education and experience — reflected in a live preview panel. Built to practice basic React concepts and state."
    const projectCvApplicationGithub = "https://github.com/dayercher005/CV-Application-Generator"
    const projectCvApplicationLivePreview = "https://cv-application-generator-blush.vercel.app/"

    const projectRestaurantPageText = "Fully responsive restaurant landing page built with ES6 JavaScript, HTML, and CSS. The page highlights the restaurant`s atmosphere, menu, and vision with smooth navigation and interactive content dynamically rendered through JavaScript."
    const projectRestaurantPageGithub = "https://github.com/dayercher005/SushiWarrior"
    const projectRestaurantPageLivePreview = "https://dayercher005.github.io/SushiWarrior/"

    return(
        <div id="Projects" className="py-120">

            <h1 className="inline-block text-3xl font-bold ml-135 mb-15 border-b-5 border-b-blue-400">Projects</h1>

            <div className="flex justify-center gap-x-15">
                <Project name="Memory Card Game" image={MemoryCardGame} projectText={projectMemoryCardText} GithubLink={projectMemoryCardGithub} LivePreviewLink={projectMemoryCardLivePreview}></Project>
                <Project name="CV-Application Generator" image={CvApplication} projectText={projectCvApplicationText} GithubLink={projectCvApplicationGithub} LivePreviewLink={projectCvApplicationLivePreview}></Project>
                <Project name="Restaurant Homepage" image={RestaurantPage} projectText={projectRestaurantPageText} GithubLink={projectRestaurantPageGithub} LivePreviewLink={projectRestaurantPageLivePreview}></Project>
            </div>
        </div>
    )
}