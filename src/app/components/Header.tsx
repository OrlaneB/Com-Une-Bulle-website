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
       
        <Image src='/logo/1LS.png' alt='logo principal' 
        id='logo'
        width={400} 
        height={108}
        onClick={()=>router.push("/")}/>

        <nav>
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