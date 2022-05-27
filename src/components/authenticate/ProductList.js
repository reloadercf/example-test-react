import { useState } from "react"
export const ProductList = () => {

  const [imputs, setImputs]=useState({
  papas:2000,
  refresco:0
})

const handleAddPapas=(e)=>{
  setImputs({...imputs,papas:e.target.value})
}
  return (
    <div>
    
  </div>
  )
}
