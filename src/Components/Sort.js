import React from 'react'

export default function Sort(props){
    const { sort, handleSortChange } = props

    return (
        <div>
            <select value={sort} onChange={handleSortChange}>
                <option value=''>***sort by name***</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </div>
    )
}