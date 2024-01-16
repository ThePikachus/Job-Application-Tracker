import React from "react";
import { useState } from "react";
import Resident from "../components/Resident.jsx";
import Popup from "../components/Popup.jsx";

function MainContainer() {
  const profiles = [
    {
      name: "John Norlin",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "purple",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi john!", "i hate you john", "get rekt"],
    },
    {
      name: "David Moore",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "blue",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi david!", "i hate you david", "get rekt"],
    },
    {
      name: "Jeffrey Mai",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "green",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi jeffrey!", "i hate you jeffrey", "get rekt"],
    },
    {
      name: "Ezekiel Mohr",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "red",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi ezekiel!", "i hate you ezekiel", "get rekt"],
    },
    {
      name: "Will Sentance",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "black",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi will!", "i hate you will", "get rekt"],
    },
    {
      name: "John Norlin",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "purple",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi john!", "i hate you john", "get rekt"],
    },
    {
      name: "David Moore",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "blue",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi david!", "i hate you david", "get rekt"],
    },
    {
      name: "Jeffrey Mai",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "green",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi jeffrey!", "i hate you jeffrey", "get rekt"],
    },
    {
      name: "Ezekiel Mohr",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "red",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi ezekiel!", "i hate you ezekiel", "get rekt"],
    },
    {
      name: "Will Sentance",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "black",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi will!", "i hate you will", "get rekt"],
    },
    {
      name: "John Norlin",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "purple",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi john!", "i hate you john", "get rekt"],
    },
    {
      name: "David Moore",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "blue",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi david!", "i hate you david", "get rekt"],
    },
    {
      name: "Jeffrey Mai",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "green",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi jeffrey!", "i hate you jeffrey", "get rekt"],
    },
    {
      name: "Ezekiel Mohr",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "red",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi ezekiel!", "i hate you ezekiel", "get rekt"],
    },
    {
      name: "Will Sentance",
      picture:
        "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
      backgroundColor: "black",
      bio: "I like pikachu",
      pronouns: "he/him",
      messages: ["hi will!", "i hate you will", "get rekt"],
    },
  ];
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    console.log("hello", profile);
    setSelectedProfile(profile);
  };

  const handleClosePopup = () => {
    setSelectedProfile(null);
  };
  return (
    <div id="MainContainer" className="profile-grid">
      {profiles.map((profile, index) => (
        <Resident
          key={index}
          name={profile.name}
          backgroundColor={profile.backgroundColor}
          picture={profile.picture}
          bio={profile.bio}
          pronouns={profile.pronouns}
          messages={profile.messages}
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
