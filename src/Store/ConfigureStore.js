import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import PeopleReducer from '../Reducers/peopleReducer'


const ConfigureStore=()=>{
    const store=createStore(combineReducers({
        people : PeopleReducer
    }),applyMiddleware(thunk))
    return store
}

export default ConfigureStore