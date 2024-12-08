"use client";
import React, {useEffect,useState} from 'react'
import { useRouter, usePathname } from 'next/navigation'


import "../styles/Footer.css"
import ContactForm from './ContactForm'

type Props = {}

export default function Footer({}: Props) {

    const router = useRouter();
  const pathname = usePathname();

  const [currentPage,setCurrentpage]=useState<string>("/");

  const pages = [{name:"Services",link:""},
                {name:"Boîte à outils", link:"/boiteaoutils"},
                {name:"L'agence", link:"/agence"},
                {name:"Réseau membres", link:""},
                {name:"Contact", link:"/contact"}]

    const socialMedia = [{name:"instagram",link:"https://www.instagram.com/com_une_bulle_by_marie_flahaut/"},
        {name:"facebook",link:"https://www.facebook.com/com.une.bulle.by.marie.flahaut?locale=fr_FR"},
        {name:"linkedin",link:"https://www.linkedin.com/in/marie-flahaut-541329aa/"}
    ];

  useEffect(()=>{
    setCurrentpage(pathname)
  },[pathname])

  return (
    <div id='Footer'>
        <div id='before'>
            <nav>
                {pages.map((p,index)=>(
                    <p className={currentPage===p.link?"white onPage":"white"}
                    key={index}
                    onClick={()=>router.push(p.link)}
                    >{p.name}</p>
                ))}
            </nav>

            <div>
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