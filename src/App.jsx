import React, { useRef, useState, useEffect} from 'react'
import EmojiData from '../emoji.json'
import './App.css'
import Emo from '../components/Emo'



function App() {
  let inputS = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(()=>{
    inputS.current.focus();
  },[]);
  
  return (
    <>
      <header>Finder Your Emoji</header>
      <input
        ref={inputS}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Enter emoji name'
      />
      {EmojiData.Emoji.filter((emoji)=>{
        if(search ===""){
          return emoji;
        }
        else if(emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || emoji.keywords.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return emoji;
        }
        return null;
      }).map((emoji)=>(
        <Emo key={emoji.keywords} emoji={emoji}/>
      ))}
    </>
  )
}

export default App
