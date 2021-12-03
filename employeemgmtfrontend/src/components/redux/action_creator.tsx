import { userInterface } from "./reducer";
import {ActionTypes} from "./action_types"
import { Action, deleteUser } from "./action";
// import { Dispatch } from "redux";



export const addUser = (user:userInterface): Action=>({
    type:ActionTypes.ADD_USER,
    payload:user
});
export const addUserLocal = (user:userInterface): Action=>({
    type:ActionTypes.USER_ADDED,
    payload:user
});
export type deleteUserAction = (index:number)=>deleteUser;
// export const addUser = (user: userInterface) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionTypes.ADD_USER,
//             payload: user
//         });
//     }
// };