import React from 'react'

const InputSearch = ({setInputText, inputText}) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

    return (
        <input value={inputText} onChange={handleChange} type='text'/>
    )
}

export default InputSearch