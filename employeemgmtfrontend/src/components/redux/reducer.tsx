
import { Action } from "./action";
import { ActionTypes } from "./action_types";

export interface userInterface{
    Name: string;
    dateOfBirth?: string;
    gender?: string;
    salary?: number;
}

export interface userState{
    users:userInterface[]
}
const intialState = {
    users:[]
}

export const userReducer = (state: userState = intialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.USER_ADDED:
           
            return { ...state, users: [...state.users, action.payload] };
        case ActionTypes.DELETE_USER:
            console.log(action);
            return state;
            //  return {...state,users:[...state.users.filter((el,index)=>index!=action.payload)]}
        default:
            return state;
    }
}