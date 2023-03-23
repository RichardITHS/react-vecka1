import React from 'react'

function FunctionEvent() {

    function clickEvent() {
        console.log('Du har klickat på knappen')
    }

  return (
    <div>
        <button onClick={clickEvent}>event knapp</button>
    </div>
  )
}

export default FunctionEvent
