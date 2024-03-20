import React from 'react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Resident from '../components/Resident.jsx';
import Instructor from '../components/Instructor.jsx';
import Popup from '../components/Popup.jsx';

async function fetchResidents() {
  const res = await axios.get('/residents');
  return res.data;
}

async function fetchInstructors() {
  const res = await axios.get('/instructors/');
  return res.data;
}


function useResidents() {
  return useQuery({ queryKey: ['residents'], queryFn: fetchResidents});
}

function useInstructors() {
  return useQuery({ queryKey: ['instructors'], queryFn: fetchInstructors });
}

function handleProfileClick(profile) {
  console.log('hi we clicked it with: ', profile);
  setUserPopupInfo(null);

}

// residents
function MainContainer() {
  const {isLoading: residentIsPending, isError: residentIsError, data: residentData, error: residentError } = useResidents();
  const {isLoading: instructorIsPending, isError: instructorIsError, data: instructorData, error: instructorError } = useInstructors();
  const [userPopupInfo, setUserPopupInfo] = useState(null);
  console.log('this is residents: ', residentData);
  console.log('this is residents pending: ', residentIsPending);
  console.log('this is our instructors', instructorData);
  console.log('this is user popup info: ', userPopupInfo);

  const handleClosePopup = () => {
    setUserPopupInfo(null);
  };
  return (
    <div id='MainContainer' className='profile-grid'>
      <div className='residents' id='residents'>
        <h1>Residents</h1>
        <div className='residents-grid'>
          {residentIsPending
            ? 'loading'
            : residentIsError
            ? residentError
            : residentData?.map((profile, index) => (
                <Resident
                  key={`${profile.name}${index}`}
                  setUserPopupInfo={setUserPopupInfo}
                  name={profile.name}
                  backgroundColor={profile.background_color}
                  picture={profile.image}
                  bio={profile.phrase}
                  pronouns={profile.pronouns}
                  onClick={handleProfileClick}
                />
              ))
              }
        </div>
      </div>

      <div className='instructors' id='instructors'>
        <h1>Instructors</h1>
        <div className='instructors-grid'>
          {instructorIsPending
            ? 'loading'
            : instructorIsError
            ? instructorError
            : instructorData?.map((profile, index) => (
                <Instructor
                  key={`${profile.name}${index}`}
                  setUserPopupInfo={setUserPopupInfo}
                  name={profile.name}
                  backgroundColor={profile.background_color}
                  picture={profile.image}
                  bio={profile.phrase}
                  pronouns={profile.pronouns}
                  onClick={handleProfileClick}
                />
              ))
              }
        </div>
      </div>

      {userPopupInfo && (
        <Popup profile={userPopupInfo} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MainContainer;
