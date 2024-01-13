import React from 'react';

function FlexBtn() {
  return (
    <>
      <div className="flex flex-row justify-evenly p-10">
        <div >
          <button className="bg-blue-500 text-white px-4 py-2 m-2 rounded rounded-[2px]">Charity</button>
        </div>
        <div >
          <button className="px-4 py-2 m-2 rounded rounded-[2px]">Crowdfundraiser</button>
        </div>
        <div >
          <button className="px-4 py-2 m-2 rounded rounded-[2px]">Company</button>
        </div>
        <div >
          <button className="px-4 py-2 m-2 rounded rounded-[2px]">School</button>
        </div>
             <div>


                
             </div>


      </div>
    </>
  );
}

export default FlexBtn;
