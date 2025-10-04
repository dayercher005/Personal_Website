import ProfileCardButtons from './ProfileCardButtons.jsx'

export default function ProfileCard() {

    const greeting = "Hello I'm, "
    const fullName = "Dayer Cher"
    const profileDescription = "Currently pursuing a degree in Computer Science. Passionate about Software Engineering and using code to solve real world problems. "

    return (
        <div>
            <p className="text-2xl font-medium">{greeting}</p>
            <p className="text-4xl font-semibold">{fullName}</p>
            <p className="text-xl font-medium">{profileDescription}</p>
            <ProfileCardButtons></ProfileCardButtons>
        </div>
    )

}