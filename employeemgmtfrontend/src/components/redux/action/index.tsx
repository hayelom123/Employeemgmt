import { ActionTypes } from "../action_types";
import { addUserAction, deleteUserAction } from "../types/actionCreatorTypes";



export const deleteuserActionCreator: deleteUserAction = (_id) => {
    return {
   type: ActionTypes.DELETE_USER,
    payload:_id
    }
}
export const addUserActionCreator: addUserAction = (payload) => {
    return {
    type: ActionTypes.ADD_USER,
    payload
    }
}