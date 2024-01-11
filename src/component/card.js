import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from './Button';
import { CiHeart } from "react-icons/ci";
function Card(props) {
  const { image, title, companyname, goal, raised, currency, percentage } = props.data;

  return (
    <div className='mt-4 ml-4 '>
      <div className="relative">
        <div className="bg-[#385988] p-1 w-8 h-8 text-white rounded-full absolute">
      <CiHeart size={20} className="mr-6" />
      </div>
        <img src={image} alt="image" />
      </div>
      <div className='space-y-5'>
        <div>{title} </div>
        <div>
          <div> {companyname}</div>
          <div className='flex flex-row mt-4 gap-2' >
          
          <img src="/images/label.png" alt="image" />
          <div>labels on the roll</div>         
          </div>
          
          <div className='flex flex-row justify-between pr-4'>
            <div>Goal</div>
            <div>{goal} {currency}</div>
          </div>
          <div className='flex flex-row justify-between pr-4'>
            <div>Raised</div>
            <div>{raised} {percentage}</div>
          </div>
          <div className='w-full'>
            <ProgressBar now={raised} label={`${raised}%`} />
            <div className="flex flex-row space-x-4 py-4">
    <Button btnclass='bg-[#385988]' label="Donate" />
    <Button btnclass='bg-[#1FC3E0] text-white'label="Fundraise" />
  </div> 

          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
