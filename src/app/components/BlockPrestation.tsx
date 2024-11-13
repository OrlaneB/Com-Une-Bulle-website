import React from 'react'

import Prestation from '../utilities/classPrestation'

type Props = {
    p:Prestation
}

export default function BlockPrestation({p}: Props) {
  return (
    <div id='PrestationBlock'>
        <h4>{p.type}</h4>
        <p>{p.preview}</p>
    </div>
  )
}