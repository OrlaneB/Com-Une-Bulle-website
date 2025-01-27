"use client";
import React, { useEffect,useState } from 'react'

import Tool from '../utilities/classTool'
import { dumTools } from '../dummyUtilities/dumTools'

import "../styles/FilterTools.css"

type Props = {
    tools:Tool[];
    setTools: React.Dispatch<React.SetStateAction<Tool[]>>

}

export default function FilterTools({tools,setTools}: Props) {

    const [chosenTag,setChosenTag]=useState<string>("Tous les outils");

    //This will be a function in a useEffect ?
    const tagSet = Array.from(new Set(dumTools.map(t=>t.tags).flat()));

    function changeTag(event:React.MouseEvent<HTMLElement>,tag:string){
        event.preventDefault();

        if(tag==="Tous les outils"){
            setTools(dumTools);
        } else {
            const newTools:Tool[] = [...dumTools.filter(tool=>{
                const setTags = new Set(tool.tags);
                return setTags.has(tag)
            })]
    
            setTools(newTools);
        }

    }



  return (
    <div id='FilterTools'>
        <div id='searchBar'>
            <div id='buttons'>
                <button className={chosenTag==="Tous les outils"?"blue":"grey"} 
                        onClick={(event)=>changeTag(event,"Tous les outils")}>
                    Tous les outils
                </button>

                {tagSet.map(tag=>(
                    <button key={tag} 
                            className={chosenTag===tag?"blue":"grey"}
                            onClick={(event)=>changeTag(event,tag)}>
                        {tag}
                    </button>
                ))}

            </div>
            <form>
                <input type='text' id='research'/>
                <button className='blue'>Recherche</button>
            </form>
        </div>

        <label>
            <input type='checkbox' />
            Afficher uniquement les produits Com'Une Bulle
        </label>

    </div>
  )
}