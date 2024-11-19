"use client";
import React, { useEffect } from 'react'

import Tool from '../utilities/classTool'

import "../styles/FilterTools.css"

type Props = {
    tools:Tool[];
    chosenTag:string
}

export default function FilterTools({tools,chosenTag}: Props) {

    //This will be a function in a useEffect ?
    const tagSet = Array.from(new Set(tools.map(t=>t.tags).flat()));



  return (
    <div id='FilterTools'>
        <div id='searchBar'>
            <div id='buttons'>
                <button className={chosenTag==="Tous les outils"?"blue":"grey"} >Tous les outils</button>
                {tagSet.map(tag=>(
                    <button key={tag} className={chosenTag===tag?"blue":"grey"}>{tag}</button>
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