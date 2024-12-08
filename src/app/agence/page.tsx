"use client";
import React, { useState } from 'react'

import "../styles/GridPrestations.css"
import "../styles/Agence.css"

import { dumPrestation } from '../dummyUtilities/dumPresations'
import BlockPrestation from '../components/BlockPrestation'

import Prestation from '../utilities/classPrestation'
import Newsletter from '../components/Newsletter';

type Props = {}

export default function Agence({}: Props) {

    const [selectedPrestation,setSelectedPrestation]=useState<Prestation|null>(dumPrestation[0])


  return (
    <div id='Agence'>

        <div id='intro'>

            <div id='prestationGridContainer'>
                <h2>Prestations Com'Une Bulle</h2>
                <p>Nos clients et leurs projets</p>
            <div id='smallPrestationGrid'>
                
                {dumPrestation && dumPrestation.slice(0,9).map((p,index)=>(
                    <div key={index} 
                    onClick={()=>setSelectedPrestation(p)}
                    >
                        <BlockPrestation selected={p.preview ===selectedPrestation?.preview} p={p} />
                    </div>
                ))}


            </div>
            </div>

                
            <div id='selectedPrestation'>
                {selectedPrestation && <div>
                <img src='/logo/LR-1.png' />

                <h3 style={{fontWeight:"700",fontSize:"1.5em"}}>
                    {selectedPrestation.type}
                </h3>

                <h4 style={{fontWeight:"500"}}>
                    {selectedPrestation.client}
                </h4>

                <p style={{margin:"50px 0"}}>
                    {selectedPrestation.intro}
                </p>

                <h5>Le retour de {selectedPrestation.client.split(",")[0]}</h5>

                <div id='clientReview'>
                    <p>
                       {selectedPrestation.review}
                    </p>
                </div>

                <button className='pink'>Découvre comment je peux t'aider</button>
                </div>}
            </div>

        </div>


        <div id='team'>
            <img src='/images/img1.jpg' />

            <div>
                <h2>L'équipe Com'Une Bulle</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='blue'>Réseau membre</button>
                <button className='pink'
                        style={{marginLeft:"15px"}}>
                            Contact
                </button>
            </div>
        </div>

        <Newsletter />

        <div id='workWithUs'>
            <div>
                <h2>Pourquoi travailler avec Com'Une Bulle ?</h2>

                <div id='h3blocks'>
                    <div>
                        <h3>Prestataires certifiés</h3>
                    </div>
                    <div>
                        <h3>Gagner du temps</h3>
                    </div>
                    <div>
                        <h3>Accélerer son projet</h3>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className='blue'>Je prends RDV</button>
            </div>

            <div style={{backgroundColor:"lightgray",width:"100%"}}>
                Google Avis
            </div>
        </div>
    </div>
  )
}