import Header from './Header.jsx'

export default function AboutCard() {

    const aboutTitle = "About me"
    const aboutContent = "Currently pursuing a Computer Science Degree in Singapore. As a Computer Science student, I see learning as a continuous journey to evolve myself personally and professionally. Beyond the classroom, I`m open to exploring opportunities to grow as a developer through hands-on projects and internships, where I can learn from real-world challenges and contribute to impactful software. "

    return(
        <div className="max-lg:text-center">
            <Header>{aboutTitle}</Header>
            <p data-testid="aboutParagraph" className="max-lg:mx-10 mt-2.5 font-medium text-lg max-w-3xl text-gray-500">{aboutContent}</p>
        </div>
    )
}