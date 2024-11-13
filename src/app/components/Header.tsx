import React from 'react'
import Image from 'next/image'

import "../styles/Header.css"

type Props = {}

export default function Header({}: Props) {
  return (
    <div id='Header'>
       
        <Image src='/logo/1LS.png' alt='logo principal' width={400} height={108}/>

        <nav>
            <p className='blue'>Services</p>
            <p className='blue'>Boîte à outils</p>
            <p className='blue'>L'agence</p>
            <p className='blue'>Réseau membres</p>
            <p className='blue'>Contact</p>
        </nav>
    </div>
  )
}