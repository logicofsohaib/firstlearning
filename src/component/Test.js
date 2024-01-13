import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Test() {
  return (
    <div>
    <div className="ml-20 mt-8 text-gray-500">
      Testimonial
    </div>
    
<div className='flex flex-row p-10 relative'>
    <div className='absolute left-[40%] top-0'> 
    <img src="./images/scal.svg" alt=" empty"   />
    </div>
<div className='w-2/5 flex flex-col'>
<div className='ml-8  font-montserrat text-[#333333;
] text-[48px] 48 leading-[71px] font-bold'> what people<br></br>
says about us</div>
<div>
    <div className='flex flex-row px-20 space-x-2'>
<FaRegArrowAltCircleRight  className='w-14 h-14'/>
<FaRegArrowAltCircleRight className='w-14 h-14' />
</div>
</div>
</div>


<div className='w-3/5'>
Through YallaGive, we were able to receive a large number of contributions online when the initiative concluded on May 15 after drawing overwhelming donations that secured 15 million meals for Covid-19 hit communities in the UAE. We are delighted to be part of this fruitful cooperation and great service offered by YallaGive, including customer service and donation collection tools, as well as generating performance reports in addition to its highly advanced tools.
</div>
</div>
<div className='ml-[550px]'> 
    Dr. waleed Ali
    <div className="flex items-center">
  <img src="./images/man.png" alt="" className="mt-2" />
  <span className="ml-4">Advisor, Mohammed bin Rashid Al Maktoum Global Initiatives</span>
</div>

</div>
    </div>
  );
}

export default Test;
