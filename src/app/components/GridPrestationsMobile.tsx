import React, { useState } from 'react'

import {dumPrestation} from '../dummyUtilities/dumPresations'
import BlockPrestation from './BlockPrestation'

import "../styles/GridPrestationsMobile.css"

type Props = {}

export default function GridPrestationsMobile({}: Props) {

  return (
    <div id='gridPrestationsMobile'>
        <div className='row' >
            {dumPrestation.slice(0,3).map((p,index)=>(
                <BlockPrestation key={index} p={p} selected={false} />
            ))}
        </div>
        <div className='row'>
            {dumPrestation.slice(3,6).map((p,index)=>(
                <BlockPrestation key={index} p={p} selected={false} />
            ))}
        </div>
        <div className='row'>
            {dumPrestation.slice(6,9).map((p,index)=>(
                <BlockPrestation key={index} p={p} selected={false} />
            ))}
        </div>
    </div>
  )
}