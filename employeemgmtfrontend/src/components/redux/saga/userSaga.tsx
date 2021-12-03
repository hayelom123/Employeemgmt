import {call,put, takeLatest,StrictEffect } from "redux-saga/effects";
import {ActionTypes} from "../action_types"
// import { userInterface } from "./reducer";
import {addUser,UserAdded,deleteUser} from '../types/action_types'
function* mySaga() {
    yield takeLatest(ActionTypes.ADD_USER, addNewUserWorker);
    yield takeLatest(ActionTypes.DELETE_USER, deleteUserWorker);
}




function* addNewUserWorker({ payload }: addUser) {
    //send to server requist
    try {
        // console.log("sennnnnnnnnnnnnnndig:", payload);
    const data: UserAdded={
        type: ActionTypes.USER_ADDED,
        payload:payload
    }
    yield put(data);
    } catch (e) {
        console.log(e);
  }
  
}
function* deleteUserWorker({payload}: deleteUser) {
    try {
        console.log("reaches hereeeeeeeeeeeeeee");
        const data:deleteUser={type: ActionTypes.DELETE_USER,
        payload:payload}
    //   yield put(data);  
    } catch (error) {
        console.log(error);
    }
    
}
export default mySaga;