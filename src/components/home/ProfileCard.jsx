import ProfileCardButtons from "./ProfileCardButtons.jsx";
import React from "react";

export default function ProfileCard() {
  const greeting = "Hello! I'm";
  const fullName = "Dayer Cher";
  const profileDescription =
    "Student Passionate about Software Engineering and using code to solve real world problems. ";

  return (
    <div className="max-w-4xl">
      <p className="text-blue-500 text-3xl font-medium max-lg:text-center max-lg:mx-5">
        {greeting}
      </p>
      <p className="text-5xl font-semibold my-2 max-lg:text-center max-lg:mx-5">
        {fullName}
      </p>
      <p className="text-gray-500 text-xl font-medium my-5 max-lg:text-center max-lg:mx-5">
        {profileDescription}
      </p>
      <ProfileCardButtons></ProfileCardButtons>
    </div>
  );
}
