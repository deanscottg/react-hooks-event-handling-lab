// Code Keypad Component Here
import React from 'react'

function Keypad(){
    function handleKeyPad(){
        console.log("Entering password...")
    }
    return(
        <input onChange={handleKeyPad} type= "password"

        />
    )
}




export default Keypad