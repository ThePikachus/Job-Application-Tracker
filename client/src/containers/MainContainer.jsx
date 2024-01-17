import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Resident from "../components/Resident.jsx";
import Instructor from "../components/Instructor.jsx";
import Popup from "../components/Popup.jsx";

function MainContainer() {
  const [residentList, setResidentList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const residentsFetcher = async () => {
    const response = await fetch("/residents");
    const data = await response.json();
    console.log(data);
    setResidentList(data);
  };

  if (residentList[0] === undefined) {
    residentsFetcher();
  }

  const instructorFetcher = async () => {
    const response = await fetch("/instructors");
    const data = await response.json();
    console.log(data);
    setInstructorList(data);
  };

  if (instructorList[0] === undefined) {
    instructorFetcher();
  }

  const handleProfileClick = (profile) => {
    console.log("hello", profile);
    setSelectedProfile(profile);
  };

  const handleClosePopup = () => {
    setSelectedProfile(null);
  };
  return (
    <div id="MainContainer" className="profile-grid">
      <div className="residents" id="residents">
        <h1>Residents</h1>
        <div className="residents-grid">
          {residentList.map((profile, index) => (
            <Resident
              key={index}
              name={profile.name}
              backgroundColor={profile.background_color}
              picture={profile.image}
              bio={profile.bio}
              pronouns={profile.pronouns}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </div>
      </div>

      <div className="instructors" id="instructors">
        <h1>Instructors</h1>
        <div className="instructors-grid">
          {instructorList.map((profile, index) => (
            <Instructor
              key={index}
              name={profile.name}
              backgroundColor={profile.background_color}
              picture={profile.image}
              bio={profile.bio}
              pronouns={profile.pronouns}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </div>
      </div>

      {selectedProfile && (
        <Popup profile={selectedProfile} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MainContainer;
