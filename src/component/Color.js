import React from 'react';
import Task from './Task';

const App = () => {
  return (
    <div>
      <h1>Task Buttons Example</h1>
      <Task color="blue" label="Task 1" />
      <Task color="yellow" label="Task 2" />
    </div>
  );
};

export default App;
