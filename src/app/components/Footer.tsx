import React from 'react'

import "../styles/Footer.css"
import ContactForm from './ContactForm'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div id='Footer'>
        <div id='before'>
            <nav>
            <p className='white'>Services</p>
            <p className='white'>Boîte à outils</p>
            <p className='white'>L'agence</p>
            <p className='white'>Réseau membres</p>
            <p className='white'>Contact</p>
            </nav>

            <div>
                <button className='round'>I</button>
                <button className='round'>L</button>
                <button className='round'>N</button>
            </div>
        </div>

        <div id='after'>
            <div>
                <img src='/logo/LS-BLANC.png' />
                <p>Libère ton temps, je révèle ton talent<br/><br/>Un projet, une question ?<br/>Envoies un message via le formulaire de contact</p>
            </div>

            <ContactForm />
        </div>
    </div>
  )
}