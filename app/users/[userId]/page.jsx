"use client"

import { useParams } from "next/navigation"


function UserPage() {
    const params = useParams()
    console.log(params)
    const clickeado = ()=>{
        console.log('it works bien ! ')
    }
  return (
    <div>
        <button onClick={clickeado}>
            Click!
        </button>
    </div>
  )
}

export default UserPage