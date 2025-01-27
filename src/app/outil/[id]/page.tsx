"use client";
import React, { useState } from 'react'

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'

import { dumTools } from '../../dummyUtilities/dumTools'
import Tool from '../../utilities/classTool';

import "../../styles/Outil.css"
import ToolBlock from '@/app/components/ToolBlock';
import Newsletter from '@/app/components/Newsletter';

type Props = {}

export default function Outil({}: Props) {

    const params = useParams();
    const id = Number(params.id);

    const router = useRouter();

    const [tool,setTool]=useState<Tool>(dumTools[id]);

  return (
    <>
      {tool && <div id='Outil'>
        <div>
            <h1>La boîte à outils <br/>Com'Une Bulle & company</h1>
            <h4>Pour te former, gagner du temps, trouver une solution...</h4>
            <p id='smallp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div id='intro'>
          <ToolBlock tool={tool}/>

          <div>
            <h2>{tool.name}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rem blanditiis incidunt excepturi amet alias rerum porro sunt! Numquam, quos facere quidem officiis sunt ad eius itaque neque voluptas repellat!</p>
            <button className='pink' style={{marginRight:"15px"}}>Acheter</button>
            <button className='blue'
              onClick={()=>router.push('/boiteaoutils')}>
              Boîte à outils
            </button>
          </div>

        </div>


        <p>...All description of tool will go there...</p>

        <h2>Ce que nos clients en pensent</h2>
        <div style={{backgroundColor:"grey",width:"100%",height:"150px"}}>Google Avis</div>

        <Newsletter />

        <div id='linkToServices'>
          <h2>Plutôt besoin d'un service sur-mesure ?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptatem unde veniam molestias, ipsam pariatur incidunt qui rem alias minus explicabo eum, aliquam corporis esse quos, maxime dolor cupiditate suscipit.</p>
          <button className='blue'>Services</button>
          <button className='pink' style={{marginLeft:"15px"}}>Contact</button>
        </div>

        
        
      </div>}
    </>
  )
}