import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle,faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export const startGetPeople=(page)=>{
    return ((dispatch)=>{
        axios.get(`https://swapi.dev/api/people/?page=${page}`)
            .then((response)=>{
                const result=response.data.results
                // console.log('people',result)
                dispatch(getPeople(result))
            })
            .catch((error)=>alert(error.message))
    })
}

export const getPeople=(data)=>{
    return {
        type : "GET_PEOPLE",
        payload : data
    }
}

export const startSearchPeople=(term,errorFunction)=>{
    return ((dispatch)=>{
        axios.get(`https://swapi.dev/api/people/?search=${term}`)
            .then((response)=>{
                const result=response.data.results
                console.log('search',result)
                if(result){
                    dispatch(searchPeople(result))
                } else {
                    errorFunction()
                }
            })
            .catch((error)=>{
                alert(error.message)
            })
    })
}

export const searchPeople=(data)=>{
    return {
        type : "SEARCH_PEOPLE",
        payload : data
    }
}

// export const startGetSpecies=(url)=>{
//     return ((dispatch)=>{
//         axios.get(`${url}`)
//             .then((response)=>{
//                 const result=response.data
//                 console.log('specie',result)
//                 // dispatch(getSpecies(result))
//             })
//             .catch((err)=>alert(` specie error ${err.message}`))
//     })
// }

// export const getSpecies=(data)=>{
//     return {
//         type : 'GET_SPECIES',
//         payload : data
//     }
// }