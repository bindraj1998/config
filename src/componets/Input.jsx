import React from 'react'
import { useState } from 'react'

const Input = ({add}) => {
    const [text,settext]=useState("")

    const handleadd=()=>{
        const t ={title:text,id:Date.now(),status:false}
        add(t)
        settext("")

    }
  return (
    <div>

        <input type="text"  value={text} placeholder='add something' onChange={(e)=>settext(e.target.value)}/>
        <button onClick={handleadd}>add todo</button>
    </div>
  )
}

export default Input