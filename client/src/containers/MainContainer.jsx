import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Resident from "../components/Resident.jsx";
import Instructor from "../components/Instructor.jsx";
import Popup from "../components/Popup.jsx";

function MainContainer() {
  const [residentList, setResidentList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const {
    data: residentData,
    isPending: residentIsPending,
    isError: residentIsError,
    error: residentError,
  } = useQuery({
    queryKey: ["residents"],
    queryFn: async () => {
      const response = await axios.get("/residents");
      return response.data;
    },
  });
  console.log("this is residents", residentData);
  console.log("this is pending: ", residentIsPending);
  const {
    data: instructorData,
    isPending: instructorIsPending,
    isError: instructorIsError,
    error: instructorError,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await axios.get("/instructors/");
      return response.data;
    },
  });
  console.log("this is our instructors", instructorData);

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
          {residentIsPending
            ? "laoding"
            : residentIsError
            ? residentError
            : residentData?.map((profile, index) => (
                <Resident
                  key={index}
                  name={profile.name}
                  backgroundColor={profile.background_color}
                  picture={profile.image}
                  bio={profile.phrase}
                  pronouns={profile.pronouns}
                  onClick={() => handleProfileClick(profile)}
                />
              ))}
        </div>
      </div>

      <div className="instructors" id="instructors">
        <h1>Instructors</h1>
        <div className="instructors-grid">
          {instructorIsPending
            ? "loading"
            : instructorIsError
            ? instructorError
            : instructorData?.map((profile, index) => (
                <Instructor
                  key={index}
                  name={profile.name}
                  backgroundColor={profile.background_color}
                  picture={profile.image}
                  bio={profile.phrase}
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
