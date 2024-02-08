import React from 'react'

export default function Emo({emoji}) {
  return (
    <div >
        <div> 
            {emoji.symbol} {emoji.title}
            
        </div>
    </div>
  )
}
