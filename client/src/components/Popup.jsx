import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input.jsx";
import Edit from "./Edit.jsx";

async function fetchProfileByName(profile) {
  const res = await axios.get(`/${profile[0]}/${profile[1]}`);
  return res.data;
}

function useProfile(profile) {
  return useQuery({ 
    queryKey: ['user', profile[1]], 
    queryFn: () => fetchProfileByName(profile),
    enabled: !!profile
  });
}

const Popup = ({ profile, onClose }) => {
  //useSelector for user profile name
  const profile = useProfile(profile)
  // const user = useSelector((state) => {
  //   return state.user.name === profile.data.name;
  // });
  console.log("hi", profile);

  if (profile.data.phrase === "undefined") profile.data.phrase = " ";

  return (
    <div className="popup-overlay">
      <div
        className="popup-content"
        style={{ backgroundColor: profile.data.background_color }}
      >
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        <h2>{profile.data.name}</h2>
        <p className="bio">{profile.data.phrase}</p>
        <ul className="messages">
          {profile?.data?.comments.map((msg) => (
            <li>{msg}</li>
          ))}
        </ul>
        {user ? <Edit /> : <Input name={profile.data.name} />}
      </div>
    </div>
  );
};

export default Popup;
