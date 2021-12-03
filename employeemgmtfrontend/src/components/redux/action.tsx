import { ActionTypes } from "./action_types";
import { userInterface } from "./reducer";
export interface addUser{
    type: ActionTypes.ADD_USER,
    payload:userInterface
}
export interface UserAdded{
     type: ActionTypes.USER_ADDED,
    payload:userInterface
}
export interface deleteUser{
    type: ActionTypes.DELETE_USER,
    payload:number
}
export interface handle{
     type: string,
    payload:userInterface
}
export type Action = addUser | deleteUser | handle;