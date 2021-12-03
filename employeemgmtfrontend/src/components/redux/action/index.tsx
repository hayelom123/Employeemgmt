import { ActionTypes } from "../action_types";
import { addUserAction, deleteUserAction } from "../types/actionCreatorTypes";



export const deleteuserActionCreator: deleteUserAction = (index) => {
    return {
   type: ActionTypes.DELETE_USER,
    payload:index
    }
}
export const addUserActionCreator: addUserAction = (payload) => {
    return {
    type: ActionTypes.ADD_USER,
    payload
    }
}