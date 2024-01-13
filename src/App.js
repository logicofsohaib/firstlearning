import React from 'react'
import Header from './component/header'
import Pic from './component/pic'
import Map from './component/map'

import BlueButton from './component/BlueColor'
//  import MYButton from './component/mybutton'

import 'bootstrap/dist/css/bootstrap.min.css';
import Gradient from './component/Gradient'
import FlexBtn from './component/Flexbtn'
import Test from './component/Test'
import New from './component/New'
function App() {
  return (
    <div>

    <Header/>
    
    <Pic/>
    <Map/>
    
    
    <BlueButton/>
    {/* <MYButton/> */}
    <Gradient/>
    <FlexBtn/>
    <Test/>
    <New/>
    
    
    </div>
  )
}

export default App