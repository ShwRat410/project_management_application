import React from 'react'

export default function Input({label,textarea,...props}) {
  return (
    <div>
      <label>{label}</label>
      {!textarea?<input {...props}></input>:<textarea {...props}></textarea>}
    </div>
  )
}
