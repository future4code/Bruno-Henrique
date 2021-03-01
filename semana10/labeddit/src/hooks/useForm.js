import { useState } from 'react'

export default function useForm(initialState) {

    const [values, setValues] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const clearForm = () => { 
        setValues(initialState)
    }

    return [values, handleChange, clearForm]
}
