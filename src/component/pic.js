import React, { useState } from 'react';

function Pic() {
  const [karachiButtonColor, setKarachiButtonColor] = useState('#1FC3E033');
  const lahoreButtonColor = '#F1F1F166'; // Lahore button color remains constant

  const changeColorsOnClick = () => {
    // Change the colors of both buttons when Karachi button is clicked
    setKarachiButtonColor('#F1F1F166');
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '56px',
    lineHeight: '71px',
    display: 'flex', // Set display to flex
    alignItems: 'center', // Align items in the center vertically
    justifyContent: 'center', // Justify content in the center horizontally
  };

  return (
    <div className='h-[924px] w-full relative'>
      <img src="/images/pic.png" alt="Pic" />
      <div style={textStyle}>
        Helping each other can make the world better
      </div>
      |
      <div className='ml-44'>
        <h1 className="font-bold">Active Campaigns</h1>

        <div>
          <button
            className="w-[207px] h-[50px] mt-4"
            style={{ backgroundColor: karachiButtonColor }}
            onClick={changeColorsOnClick}
          >
            Karachi
          </button>
          <button
            className="bg-[#F1F1F166] w-[207px] h-[50px] ml-4"
            style={{ backgroundColor: lahoreButtonColor }}
          >
            Lahore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pic;
