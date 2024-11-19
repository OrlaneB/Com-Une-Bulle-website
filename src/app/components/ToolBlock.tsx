import React from 'react'
import Tool from '../utilities/classTool'
import { useRouter } from 'next/navigation'

type Props = {
  tool:Tool
}



export default function ToolBlock({tool}: Props) {

  const router = useRouter();


  function getImageCreator (str:string){
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\W/g,"");
  }

  return (
    <div key={tool.name} style={{backgroundImage:`url(${tool.mainImage})`}} className='toolContainer' onClick={()=>router.push(`/outil/${tool.id}`)}>

              <div className='logoContainer'>
                <img src={`/toolImages/creator/${getImageCreator(tool.creator)}.png`} />
              </div>

              <div className='textContainer'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <h5>{tool.name} by {tool.creator}</h5>
                  <p>{tool.price.EUR}</p>
                </div>
                <p>{tool.preview}</p>
              </div>

            </div>
  )
}