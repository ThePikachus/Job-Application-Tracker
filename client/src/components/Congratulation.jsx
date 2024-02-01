import React from 'react';

function Congratulation() {
  const ECRI_icon =
    'https://ci3.googleusercontent.com/meips/ADKq_NYsxe95NAAsFBH3v-jqY2mFMVVS37Ds9TYEoOM9E8UuWhSh6MtQ7fCMxtbSgwm6ga3y7IwET2Es1HPd9PlY_DpJnWY15uqI2hHQL1mU1tBdbAzOOFDYr67nKMCoaPPlh0YGh3hPYG71bg=s0-d-e1-ft#https://avatars.slack-edge.com/2023-09-27/5961449257172_d4582b88609226b9e897_88.png';
  return (
    <div className='congratulation'>
      <img src={ECRI_icon} id='logo' />
      <h1>Congratulation ECRI 44!</h1>
    </div>
  );
}

export default Congratulation;
