import React from "react";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import Resident from "../components/Resident.jsx";
import Popup from "../components/Popup.jsx";

function MainContainer() {
  const [profileList, setProfileList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // const profilesFetcher = async () => {
  //   const response = await fetch("/residents");
  //   const data = await response.json();
  //   console.log(data);
  //   setProfileList(data);
  // };

  // const profilesFetcher = async ({ queryKey }) => {
  //   const [] = queryKey;
  //   const response = await fetch(`residents`);
  //   const data = await response.json();
  //   return data;
  // };
  const { data: residentData, isPending: residentIsPending, isError: residentIsError, error: residentError } = useQuery({
    queryKey: ["residents" ],
    queryFn: async () => {
      const response = await fetch('/residents/')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
        return response.json()
    },
  });
  console.log(data);
  const handleProfileClick = (profile) => {
    console.log("hello", profile);
    setSelectedProfile(profile);
  };

  const handleClosePopup = () => {
    setSelectedProfile(null);
  };
  if (isPending) return"loading";
  if (isError) return error;
  return (
    <div id="MainContainer" className="profile-grid">
      <h1>Residents</h1>
      {data.map((profile, index) => (
        <Resident
          key={index}
          name={profile.name}
          backgroundColor={profile.backgroundColor}
          picture={profile.image}
          bio={profile.bio}
          pronouns={profile.pronouns}
          onClick={() => handleProfileClick(profile)}
        />
      ))}
      {selectedProfile && (
        <Popup profile={selectedProfile} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MainContainer;
