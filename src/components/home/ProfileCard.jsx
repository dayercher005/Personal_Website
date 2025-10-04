import ProfileCardButtons from './ProfileCardButtons.jsx'

export default function ProfileCard() {

    const greeting = "Hello! I'm"
    const fullName = "Dayer Cher"
    const profileDescription = "Currently pursuing a degree in Computer Science. Passionate about Software Engineering and using code to solve real world problems. "

    return (
        <div className="max-w-4xl">
            <p className="text-blue-400 text-3xl font-medium">{greeting}</p>
            <p className="text-5xl font-semibold my-2">{fullName}</p>
            <p className="text-gray-500 text-xl font-medium my-5">{profileDescription}</p>
            <ProfileCardButtons></ProfileCardButtons>
        </div>
    )

}