import React from 'react';
import Card from './card'; // Make sure to adjust the path based on your project structure
import data from './api.json';

function Map() {
  return (
    <div className='grid max-w-[1040px] mt-0 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 p-10 mx-auto'>
      {data.map((item, index) => (
        <Card
          key={index}
          data={item}
        />
      ))}
    </div>
  );
}

export default Map;
