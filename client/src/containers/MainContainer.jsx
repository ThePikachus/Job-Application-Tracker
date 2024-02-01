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


function MainContainer() {
  const residents = useResidents();
  const instructors = useInstructors();
  const [userName, setUserName] = useState(null);
  console.log('this is residents', residentData);
  console.log('this is pending: ', residentIsPending);

  console.log('this is our instructors', instructorData);

  const handleClosePopup = () => {
    setUserName(null);
  };
  return (
    <div id='MainContainer' className='profile-grid'>
      <div className='residents' id='residents'>
        <h1>Residents</h1>
        <div className='residents-grid'>
          {residentIsPending
            ? 'laoding'
            : residentIsError
            ? residentError
            : residentData?.map((profile, index) => (
                <Resident
                  key={`${profile.name}${index}`}
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

      {userName && (
        <Popup profile={userName} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default MainContainer;
