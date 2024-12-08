import React from 'react'
import ContactForm from '../components/ContactForm'

import "../styles/Contact.css"

type Props = {}

export default function Contact({}: Props) {
  return (
    <div id='Contact'>
        <div>
            <h2>On en discute ?</h2>
            <h4>Réponse sous 2 jours ouvrés</h4>

            <p>
                Retrouve Com’Une Bulle sur les réseaux sociaux et à son bureau.
            </p>

            <div id='socialMedia'>
                <button className='round' name='Lien Facebook'>
                    <img src='/icones/facebook_icone.png' alt='Icone Facebook' />
                </button>
                <button className='round' name='Lien Instagram'>
                    <img src='/icones/instagram_icone.png' alt='Icone Instagram'/>
                </button>
                <button className='round' name='Lien Linkedin'>
                    <img src='/icones/linkedin_icone.png' alt='Icone Linkedin' />
                </button>
            </div>

            <div style={{backgroundColor:"lightgray",height:"200px",width:"150%"}}>
                Google Maps
            </div>
        </div>

        <ContactForm />
    </div>
  )
}