"use client";
import React, { useState } from 'react'


import FilterTools from '../components/FilterTools'

import Tool from '../utilities/classTool'
import { dumTools } from '../dummyUtilities/dumTools'
import Newsletter from '../components/Newsletter';

import "../styles/BoiteAOutils.css"
import "../styles/ToolBlock.css"
import ToolBlock from '../components/ToolBlock';

type Props = {}

export default function BoiteAOutils({}: Props) {

    //This will then come from backend
    const [tools,setTools]=useState<Tool[]>(dumTools);

    const [chosenTag,setChosenTag]=useState<string>("Tous les outils");

  return (
    <div id='BoiteAOutils'>

        <div>
            <h1>La boîte à outils <br/>Com'Une Bulle & company</h1>
            <h4>Pour te former, gagner du temps, trouver une solution...</h4>
            <p style={{width:"45%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <FilterTools tools={tools} chosenTag={chosenTag} />

        <div id='GridTools'>
          {tools && tools.map(t=>(
            <ToolBlock tool={t} key={t.id}/>
          ))}
        </div>

        <div>
          <h2>Ce que nos clients en pensent</h2>
          {/* This will be the Google reviews*/}
          <div style={{width:"100%",height:"200px",backgroundColor:"#d9d9d9"}}>Google Reviews</div>
        </div>

        <Newsletter />

        <div id='linkToServices'>
          <h2>Plutôt besoin d'un service sur-mesure ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem unde veniam molestias, ipsam pariatur incidunt qui rem alias minus explicabo eum, aliquam corporis esse quos, maxime dolor cupiditate suscipit.</p>
          <button className='blue'>Services</button>
          <button className='pink' style={{marginLeft:"15px"}}>Contact</button>
        </div>


    </div>
  )
}