"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'

import { useRouter, usePathname } from 'next/navigation'

import "../styles/Header.css"

type Props = {}

export default function Header({}: Props) {



  const router = useRouter();
  const pathname = usePathname();

  const [currentPage,setCurrentpage]=useState<string>("/");
  const [openedMobileNav,setOpenedMobileNav]=useState<boolean>(false);

  const pages = [{name:"Services",link:""},
                {name:"Boîte à outils", link:"/boiteaoutils"},
                {name:"L'agence", link:"/agence"},
                {name:"Réseau membres", link:""},
                {name:"Contact", link:"/contact"}]

  useEffect(()=>{
    setCurrentpage(pathname)
  },[pathname])

  return (
    <div id='Header'>

        <div id='burger-menu-icon' className='onlyMobile'
        onClick={()=>setOpenedMobileNav(!openedMobileNav)}>
          <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H25" stroke={openedMobileNav?"white":"#1D909E"}/>
            <path d="M1 11H25" stroke={openedMobileNav?"white":"#1D909E"}/>
            <path d="M1 22H25" stroke={openedMobileNav?"white":"#1D909E"}/>
          </svg>
        </div>

        {openedMobileNav && <nav className={`onlyMobile`}>
          <div>
            <p onClick={()=>router.push("/")}
            className={currentPage==="/"?"white onPage":"white"}>Accueil</p>
          {pages.map((p,index)=>(
            <p key={index}
            onClick={()=>router.push(p.link)}
            className={currentPage===p.link?"white onPage":"white"}>{p.name}</p>
          ))}
          </div>
        </nav>}
       
        <img src='/logo/1LS.png' alt='logo principal' 
        id='logo'
        onClick={()=>router.push("/")}/>

        <nav className='onlyDesktop'>
          {pages.map((p,index)=>(
            <p className={currentPage===p.link?"blue onPage":"blue"}
              key={index}
              onClick={()=>router.push(p.link)}>
                {p.name}
            </p>
          ))}
        </nav>

      
    </div>
  )
}