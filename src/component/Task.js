import React, { useState } from 'react';

const Task = ({ color, label }) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleToggle}
        className={` ${isToggled ? "bg-red-500": "bg-orange-500"} `}
      >
      Karachi
        
      </button>

      
      <button className={`${isToggled ? "bg-orange-500": " bg-red-500"} text-gray-800 font-bold py-2 px-4 rounded-full ml-2 focus:outline-none focus:shadow-outline`}>
        Lahore
      </button>
    </div>
  );
};

export default Task;
