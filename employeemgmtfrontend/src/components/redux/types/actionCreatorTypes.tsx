import { user } from "./storeTypes";
import { addUser, deleteUser } from "./action_types";


export type addUserAction = (payload:user) => addUser;
export type deleteUserAction = (_id:string)=>deleteUser;