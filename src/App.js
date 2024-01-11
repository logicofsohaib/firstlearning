import React from 'react'
import Header from './component/header'
import Pic from './component/pic'
import Map from './component/map'
import Car from './component/Car'
import Task from './component/Task'
//  import MYButton from './component/mybutton'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>

    <Header/>
    
    <Pic/>
    <Map/>
    <Car/>
    <Task/>
    {/* <MYButton/> */}
    
    </div>
  )
}

export default App