import { useState } from "react"

export const AddElement = ({handleSaveNote}) => {
    const[note,setNote]=useState({
        titulo:"",
        text:""
    })

    const handleTitle =(e)=>{
        setNote({...note,titulo:e.target.value})
    }

  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        handleSaveNote(note)
    }}>
        <input placeholder="Titulo" onChange={handleTitle} />
        <input placeholder="Texto"/>
        <button type="submit">Guardar</button>
    </form>
  )
}
