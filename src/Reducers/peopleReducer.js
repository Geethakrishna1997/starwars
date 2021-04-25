const stateInitialValue = []

export default function PeopleReducer(state=stateInitialValue,action){
    // const [searchFlag,setSearchFlag] = useState(false)
    switch(action.type){        
        case "GET_PEOPLE" : {
            return [...action.payload]
        }        
        case "SEARCH_PEOPLE" : {
            return [...action.payload]
        }
        // case "GET_SPECIES" : {
        //     return {...action.payload}
        // }
        default : {
            return [...state]
        }
    }
}