import React, {useState} from 'react'

function Car() {
    const [first, setfirst] = useState('15')

     function hello(){

        setfirst('20');

    }

  return (


    <div>
        {first}
        <button onClick={hello}>clicked</button>
    </div>
  )
}

export default Car