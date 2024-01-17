import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Resident from "../components/Resident.jsx";
import Instructor from "../components/Instructor.jsx";
import Popup from "../components/Popup.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setRender } from "../redux/slices/pageSlice.js";

function MainContainer() {
  const dispatch = useDispatch();
  const rerender = useSelector((state) => state.page.rerender);
  const [selectedProfile, setSelectedProfile] = useState(null);
  let residentData;
  let instructorData;
  useEffect(() => {
    residentData = useQuery({
      queryKey: ["residents"],
      queryFn: async () => {
        const response = await axios.get("/residents");
        return response.data;
      },
    });

    instructorData = useQuery({
      queryKey: ["instructors"],
      queryFn: async () => {
        const response = await axios.get("/instructors/");
        return response.data;
      },
    });

    dispatch(setRender());
  }, [rerender]);

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
          {residentData?.map((profile, index) => (
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
          {instructorData?.map((profile, index) => (
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
