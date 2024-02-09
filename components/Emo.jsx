import React from 'react'

export default function Emo({emoji}) {
  return (
    <div >
        <div className='div2'> 
            {emoji.symbol} {emoji.title}
            
        </div>
    </div>
  )
}
