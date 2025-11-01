import Project from './Project.jsx'
import MemoryCardGame from '/src/assets/MemoryCardGame.png'
import CvApplication from '/src/assets/CvApplication.png'
import RestaurantPage from '/src/assets/RestaurantPage.png'

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
        <div id="Projects" className="xl:w-5/10 lg:w-8/10 min-w-65 xl:min-w-300 lg:min-w-120 max-lg:text-center py-60 mx-auto">

            <h1 className="lg:inline-block mb-15 md:text-3xl max-lg:inline-block text-2xl font-bold border-b-5 border-b-blue-400">Projects</h1>

            <div className="lg:grid xl:grid-rows-1 xl:grid-cols-3 lg:grid-cols-2 lg:grid-rows-2 lg:justify-center block gap-x-15 lg:gap-y-15">
                <Project name="Memory Card Game" image={MemoryCardGame} projectText={projectMemoryCardText} GithubLink={projectMemoryCardGithub} LivePreviewLink={projectMemoryCardLivePreview}></Project>
                <Project name="CV-Application Generator" image={CvApplication} projectText={projectCvApplicationText} GithubLink={projectCvApplicationGithub} LivePreviewLink={projectCvApplicationLivePreview}></Project>
                <Project name="Restaurant Homepage" image={RestaurantPage} projectText={projectRestaurantPageText} GithubLink={projectRestaurantPageGithub} LivePreviewLink={projectRestaurantPageLivePreview}></Project>
            </div>
        </div>
    )
}