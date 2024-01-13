import React from 'react';

export default function New() {
  return (
    <div className='mt-6 ml-16'>
      <div className='flex flex-row'>
        <div className='w-1/3'>
          <div>what we do</div>
          <div className=' '>
         <div className='font-montserrat font-bold text-[#333333] text-4xl'>  Helpo Causes</div> 
            <div><p className='font-roboto '>
              Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish
              velvet-belly shark, California halibut round stingray northern sea robin. Southern
              grayling trout-perch
            </p>
            </div>
          </div>
        </div>
        <div className='w-2/3'>
          <div className='grid grid-cols-3 max-w-[750px] p-4 gap-5'>
            <div className='flex flex-col items-center justify-center bg-[#1FC3E033] w-[207px] h-[225px] rounded-sm'>
              <img src='./images/search.png' alt='Search Icon' className='w-10 h-10 mb-8' />
              Members<br />
              52516
            </div>
            <div className='flex items-center justify-center bg-[#5D5FEF] w-[207px] h-[225px] rounded-sm'>
              Campaigns
            </div>
            <div className='flex items-center justify-center bg-[#F2994A] w-[207px] h-[225px] rounded-sm'>
              Total Goals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
