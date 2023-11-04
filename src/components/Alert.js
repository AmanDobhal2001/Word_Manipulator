import React from 'react'
export default function Alert(props) {
  return (<div style={{height : '10px'}}>
    {props.alert&&<div className="alert alert-success" role="alert">
      <strong>{props.alert.type}</strong>{props.alert.message}
    </div>}
    </div>
  )
}
