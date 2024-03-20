import React from 'react';

function Instructor({
  name,
  backgroundColor,
  picture,
  bio,
  pronouns,
  clickPopupFunc,
  setUserPopupInfo,
}) {
  const style = {
    backgroundColor: backgroundColor,
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  if (bio === 'undefined') bio = ' ';
  if (pronouns === 'undefined') name = name;
  else if (pronouns !== '') name = name + ` (${pronouns})`;

  return (
    <div className='instructor'>
      <img id='pic' src={picture}></img>
      <div
        className='instructor-card'
        onClick={() => clickPopupFunc} 
        style={style}
      >
        <div className='instructor-text'>
          <h3 id='name'>{name}</h3>
          {pronouns && <div className='pronouns'>{pronouns}</div>}
          <p className='bio'>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
