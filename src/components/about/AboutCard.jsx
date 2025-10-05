import Header from './Header.jsx'

export default function AboutCard() {

    const aboutTitle = "About me"
    const aboutContent = "Currently pursuing a Computer Science Degree in Singapore. I`m exploring opportunities to grow as a developer through hands-on projects and internships, where I can learn from real-world challenges and contribute to impactful software."

    return(
        <div>
            <Header>{aboutTitle}</Header>
            <p className="font-medium text-lg max-w-3xl text-gray-500">{aboutContent}</p>
        </div>
    )
}