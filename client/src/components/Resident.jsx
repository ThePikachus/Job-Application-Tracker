import React from 'react';

function Resident({
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
  if (pronouns === 'undefined') pronouns = '';
  else if (pronouns !== '') name = name + ` (${pronouns})`;

  return (
    <div className='resident'>
      <img id='pic' src={picture} alt='your mom'></img>
      <div
        className='resident-card' 
        onClick={clickPopupFunc} 
        style={style}
      >
        <div className='resident-text'>
          <h3 id='name'>{name}</h3>
          {pronouns && <div className='pronouns'>{pronouns}</div>}
          <p className='bio'>{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Resident;
