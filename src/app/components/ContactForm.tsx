import React from 'react'

import "../styles/ContactForm.css"

type Props = {}

export default function ContactForm({}: Props) {
  return (
    <form id='ContactForm'>
        <input type='text' name='name' placeholder='Nom...'/>
        <input type="email" name='mail'placeholder='Mail...'/>
        <select aria-placeholder='Objet du mail'>
          <option value="question">J'ai une question sur un service/outil</option>
          <option value="prestataire">Je veux devenir prestataire certifié</option>
          <option value="projet">J'ai un projet</option>
          <option value="collaboration">Je veux travailler avec Com'Une Bulle</option>
          <option value="autre">Autre...</option>
        </select>
        <textarea name='message'placeholder='Message...'/>
        <div>
          <button className='pink'>Envoyer</button>
        </div>
    </form>
  )
}