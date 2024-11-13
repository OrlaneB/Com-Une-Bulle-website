import React from 'react'
import BlockPrestation from './BlockPrestation'

import "../styles/GridPrestations.css"

import {dumPrestation} from '../dummyUtilities/dumPresations'

type Props = {}

export default function GridPrestations({}: Props) {

  return (
    <div id="GridPrestations">
        {dumPrestation.map(p=>(
            <BlockPrestation p={p}/>
        ))}
        <div style={{gridArea:"1 / 8 / span 1 / span 2"}}></div>
        <div style={{gridArea:"1 / 10 / span 1 / span 2"}}></div>
        <div style={{gridArea:"2 / 1 / span 1 / span 1"}}></div>
        <img style={{gridArea:"2 / 10 / span 1 / span 1", width:"70px"}} src='/logo/LR-1.png'  />
        <div style={{gridArea:"3 / 10 / span 1 / span 2"}}></div>
        <div style={{gridArea:"4 / 1 / span 1 / span 1"}}></div>
    </div>
  )
}