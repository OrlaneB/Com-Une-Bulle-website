import React from 'react'

import Prestation from '../utilities/classPrestation'

type Props = {
    p:Prestation,
    selected:boolean
}

export default function BlockPrestation({p,selected}: Props) {
  return (
    <div id='PrestationBlock' 
    style={selected?
      {backgroundImage:'url("/images/bgP2.png")'}:
      {backgroundImage:'url("/images/bgP.png")'}}>
        <h4 style={selected?{color:"#ED6D55"}:{color:"white"}}>{p.type}</h4>
        <p style={selected?{color:"#ED6D55"}:{color:"white"}}>{p.preview}</p>
    </div>
  )
}