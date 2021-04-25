import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Search from './Search'
import Sort from './Sort'
import Table from './Table'
import { startGetPeople,startSearchPeople } from '../Actions/peopleAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function Container(){
    const [term,setTerm] = useState('')
    const [sort,setSort] = useState('')
    // const [sortFlag,setSortFlag] = useState(false)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetPeople())
    },[dispatch])

    const peopleList=useSelector((state)=>{
        return state.people
    })
    console.log('peopelDetails',peopleList)

    const handleChange=(e)=>{
        setTerm(e.target.value)
        const errorFunction=()=>{
            <img><FontAwesomeIcon icon={faExclamationTriangle} /></img>
        }
        dispatch(startSearchPeople(e.target.value,errorFunction))
    }

    const handleSortChange=(e)=>{
        setSort(e.target.value)
        if(e.target.value == 'A-Z'){
            peopleList.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                } else if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                } else {
                    return 0
                }
            })
        } else if(e.target.value == 'Z-A'){
            peopleList.sort((a,b)=>{
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return 1
                } else if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                } else {
                    return 0
                }
            })
        }
        
    }

    // const filteredpeople=()=>{
    //     const res = peopleList.filter((ele)=>{
    //         return ele.name.includes(term)
    //     })
    //     // console.log('res',res)
    //     return res
    // }
    // console.log('filteredpeople',filteredpeople())

    return (
        <div>
            <Search term={term} handleChange={handleChange}/>
            <Sort sort={sort} handleSortChange={handleSortChange}/>
            <Table peopleList={peopleList} />
        </div>
    )
}