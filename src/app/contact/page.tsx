"use client"
import React from 'react'
import ContactForm from '../components/ContactForm'

import "../styles/Contact.css"

type Props = {}

export default function Contact({}: Props) {

    const socialMedia = [{name:"instagram",link:"https://www.instagram.com/com_une_bulle_by_marie_flahaut/"},
        {name:"facebook",link:"https://www.facebook.com/com.une.bulle.by.marie.flahaut?locale=fr_FR"},
        {name:"linkedin",link:"https://www.linkedin.com/in/marie-flahaut-541329aa/"}
    ]

  return (
    <div id='Contact'>
        <div>
            <h2>On en discute ?</h2>
            <h4>Réponse sous 2 jours ouvrés</h4>

            <p>
                Retrouve Com’Une Bulle sur les réseaux sociaux et à son bureau.
            </p>

            <div id='socialMedia'>
            {socialMedia.map((item,index)=>(
                    <button key={index} 
                    className='round'
                    name={`Lien ${item.name}`}
                    onClick={(event)=>{event.preventDefault(); 
                        window.open(item.link, "_blank", "noopener,noreferrer");}}>
                        <img src={`/icones/${item.name}_icone.png`} alt={`Icone ${item.name}`}/>
                    </button>
                ))}
            </div>

            <div style={{backgroundColor:"lightgray",height:"200px",width:"150%"}}>
                Google Maps
            </div>
        </div>

        <ContactForm />
    </div>
  )
}