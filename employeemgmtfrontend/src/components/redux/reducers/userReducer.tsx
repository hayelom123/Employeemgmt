import { Reducer } from "redux";
import { Action } from "../types/action_types";
// import { user, } from "../types/storeTypes";
import storeType from "../types/storeTypes"; 
import { ActionTypes } from "../action_types";
const intialState = {
    users:[]
}
 export const  userReducer = (state: storeType = intialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.USER_ADDED:
            
            return { ...state, users: [...state.users, action.payload] };
        case ActionTypes.DELETE_USER:
            console.log(state);
           
             return {...state,users:[...state.users.filter((el,index)=>index!=action.payload)]}
        default:
            return state;
    }
}
export default  userReducer;