import React from 'react'

export default function Emo({emoji}) {
  return (
    <div >
        <div> 
            {emoji.symbol} <p>{emoji.title}</p>
            
        </div>
    </div>
  )
}
