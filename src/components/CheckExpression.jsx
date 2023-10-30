import React from 'react'

const CheckExpression = () => {
    let x=25;
    let y=30;
  return (
    <div>
        <h1>Evaluate Expression</h1>
      <h3>{x}{">"}{y} : {x>y? "true" : "false"}</h3>
    </div>
  )
}

export default CheckExpression
