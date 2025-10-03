import Title from './Title.jsx'

export default function Navbar() {


    return (
        <nav className="flex justify-evenly">

            <Title className="basis-64" name="Dayer Cher"></Title>

            <div className="flex basis-130 justify-evenly">
                <Title name="Home"></Title>
                <Title name="About"></Title>
                <Title name="Projects"></Title>
                <Title name="Contact"></Title>
            </div>
        </nav>
    )
}