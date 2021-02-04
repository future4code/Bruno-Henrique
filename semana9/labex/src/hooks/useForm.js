import { useState } from 'react'

export function useForm(initialState) {
    const [form, setForm] = useState(initialState)

    const handleOnChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    return [form, handleOnChange]
}