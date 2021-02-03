import { useState, useEffect } from 'react'

export function useInput() {
    const [input, setInput] = useState("")

    const handleOnChange = (event) => { 
        setInput(event.target.value)
    }

    return [input, handleOnChange] 
}
