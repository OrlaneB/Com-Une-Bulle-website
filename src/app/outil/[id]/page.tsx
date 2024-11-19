"use client";
import React, { useState } from 'react'

import { useParams } from 'next/navigation';

import { dumTools } from '../../dummyUtilities/dumTools'
import Tool from '../../utilities/classTool';

import "../../styles/Outil.css"

type Props = {}

export default function Outil({}: Props) {

    const params = useParams();
    const id = Number(params.id);

    const [tool,setTool]=useState<Tool>(dumTools[id]);

  return (
    <>
      {tool && <div id='Outil'>
        <div>
            <h1>La boîte à outils <br/>Com'Une Bulle & company</h1>
            <h4>Pour te former, gagner du temps, trouver une solution...</h4>
            <p style={{width:"45%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div id='intro'>
          <img src={tool.mainImage} />

          <div>
            <h2>{tool.name}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem blanditiis incidunt excepturi amet alias rerum porro sunt! Numquam, quos facere quidem officiis sunt ad eius itaque neque voluptas repellat!</p>
            <button className='pink' style={{marginRight:"15px"}}>Acheter</button>
            <button className='blue'>Boîte à outils</button>
          </div>

        </div>
        
      </div>}
    </>
  )
}