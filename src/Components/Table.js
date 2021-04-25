import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './../App.css';
// import { Link, Route } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { startGetPeople, startGetSpecies } from '../Actions/peopleAction'
// import  android  from '@fortawesome/fontawesome-free/js/solid.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faQuestion,faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core';
// import { }

export default function Table({peopleList}){
    // const [ specie,setSpecie] = useState([])
    const [pagination,setPagination] = useState()
    const dispatch=useDispatch()
    let pagesCount = []
    let tableIcons
    const icons = {
        dorid : 'http://swapi.dev/api/species/2/',
        human : 'http://swapi.dev/api/species/1/'
    }

    const icon=(url)=>{
        dispatch(startGetSpecies(url))
    }

    // const icon=()=>{
    //     peopleList.map((people)=>{
    //         if(people.species == icons.droid ){
    //             return <img><FontAwesomeIcon icon={faUserCircle} /></img>
    //         } else if(people.species == icons.human){
    //             return "human"
    //         } else{ 
    //             return <img><FontAwesomeIcon icon={faQuestion} /></img>
    //         }
    //     })
    // }
    // console.log('icon',icon())


    const handleClick=(page)=>{
        dispatch(startGetPeople(page))
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/`)
            .then((response)=>{
                const res=response.data
                // setPagination(res.count)
                // const total=res.count
                const temp=Math.ceil(res.count/10)
                setPagination(temp)
            })
    },[])
    // console.log('pagination',pagination)

    for(let i=1; i <= pagination; i++){
        pagesCount.push(i)
    }
    // console.log('pageCount',pagesCount)

    // useEffect(()=>{
    //     peopleList.map((p)=>{
    //         axios.get(`${p.species}`)
    //             .then((response)=>{
    //                 const res=response.data
    //                 console.log('res',res)
    //                 setSpecie(res)
    //             })
    //     })
    // },[])
    // console.log('specie',specie)

    return (
        <div>
            <table className='table'>
                <thead >
                    <tr >
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Birth year</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Skin Color</th>
                        <th>Hair Color</th>
                        <th>Eye Color</th>
                        <th>URL</th>
                        <th>Home World</th>
                        <th>Films</th>
                        <th>Species</th>
                        <th>Starships</th>
                        <th>Vehicles</th>
                    </tr>
                </thead>
                <tbody >
                    {peopleList.map((ele,i)=>{
                        return (
                            <tr key={i} >
                                <td>{icon(ele.species)}
                                    {/* {for(const key in icons){
                                        if(key == {ele.species}){
                                            return 'droid'
                                        }
                                    }} */}
                                </td>
                                {/* {axios.get(`${ele.species}`)
                                    .then((response)=>{
                                        const result=response.data
                                        if(result.name && result.name == 'Human'){
                                            return <td>Human</td>
                                        } else if(result.name && result.name == 'Droid'){
                                            return <td><FontAwesomeIcon icon={faUserCircle} /></td>
                                        } else {
                                            return <td><FontAwesomeIcon icon={faQuestion} /></td>
                                        }
                                    })                                   
                                } */}
                                    {/* <FontAwesomeIcon icon={faExclamationCircle} /> 
                                    <i className="fab fa-android" alt='android'></i>  */}
                                
                                <td>{ele.name}</td>
                                <td>{ele.birth_year}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.height} cms</td>
                                <td>{ele.mass} kgs</td>
                                <td>{ele.skin_color}</td>
                                <td>{ele.hair_color}</td>
                                <td>{ele.eye_color}</td>
                                <td>{ele.url}</td>
                                <td>{ele.homeworld}</td>
                                <td>{ele.films.map((film,i)=>{
                                    return (
                                        <p key={i}>{film}</p>
                                    )
                                })}</td>
                                <td>{ele.species}
                                    {/* {icons[ele.species[0]] } */}
                                    
                                </td>
                                <td>{ele.starships.map((starship,i)=>{
                                    return (
                                        <p key={i}>{starship}</p>
                                    )
                                })}</td>
                                <td>{ele.vehicles.map((vehicle,i)=>{
                                    return (
                                        <p key={i}>{vehicle}</p>
                                    )
                                })}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>

            {pagesCount.map((p,i)=>{
                return (
                    <button key={i} onClick={()=>{handleClick(p)}}>{p}</button>
                )
            })}

        </div>
    )
}
/*
{ specie.map((ele,i)=>{
        if(ele.name == 'Human'){
            return <td>Human</td>
        } else if(ele.name == 'Droid'){
            return <td><FontAwesomeIcon icon={faUserCircle} /></td>
        } else {
            return <td><FontAwesomeIcon icon={faQuestion} /></td>
        }
    })
}       
    useEffect(()=>{
        peopleList.map((p)=>{
            axios.get(`${p.species}`)
                .then((response)=>{
                    const res=response.data
                    console.log('res',res)
                    setSpecie(res)
                })
        })
    },[specie])
    console.log('specie',specie)
*/