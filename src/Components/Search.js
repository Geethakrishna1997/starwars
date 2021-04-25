import React from 'react'

export default function Search(props){
    const { term, handleChange } = props

    return (
        <input 
            type='text'
            value={term}
            onChange={handleChange}
            placeholder='search people'
        />
    )
}