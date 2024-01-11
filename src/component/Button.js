import React from 'react';

function Button(props) {
  return (
    <button className={`w-143 h-42 border rounded-md px-4 ${props.btnclass} `}>
      {props.label}
    </button>
  );
}

export default Button;
