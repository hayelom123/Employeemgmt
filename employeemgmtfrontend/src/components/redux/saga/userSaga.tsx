import { call, put, takeLatest, StrictEffect } from "redux-saga/effects";
// import { addDataToServer } from "../../../data";
import { ActionTypes } from "../action_types";
import userApi from "../api/userApi";
import { AxiosResponse } from "axios";
// import { userInterface } from "./reducer";
import {
  addUser,
  UserAdded,
  deleteUser,
  getEmployess,
  goTEmployess,
} from "../types/action_types";
function* mySaga(): Generator<StrictEffect> {
  yield takeLatest(ActionTypes.ADD_USER, addNewUserWorker);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUserWorker);
  yield takeLatest(ActionTypes.Get_Users_Fetch, getListOfEmployees);
}

function* getListOfEmployees({ page }: getEmployess) {
  console.log("getting users");
  try {
    console.log("sennnnnnnnnnnnnnndig:", page);
    //addDataToServer(payload)
    const response: AxiosResponse = yield call(
      userApi.post,
      "/get-all-employees"
    );
    console.log(response);
    if (response.status == 200) {
      console.log("getting started");
      const data: goTEmployess = {
        type: ActionTypes.Got_users,
        payload: response.data,
      };
      console.log("reaches here");
      yield put(data);
    }
  } catch (e) {
    console.log(e);
  }
}
function* addNewUserWorker({ payload }: addUser) {
  //send to server requist
  try {
    console.log("sennnnnnnnnnnnnnndig:", payload);
    //addDataToServer(payload)
    const response: AxiosResponse = yield call(
      userApi.post,
      "/add-new-employee",
      {
        ...payload,
      }
    );
    console.log(response);
    if (response.status == 200) {
      console.log("getting started");
      //   const data: UserAdded = {
      //     type: ActionTypes.USER_ADDED,
      //     payload: response.data,
      //   };
      //   console.log("reaches here");
      //   yield put(data);
    }
  } catch (e) {
    console.log(e);
  }
}
function* deleteUserWorker({ payload }: deleteUser) {
  try {
    console.log("dddddddddddddddddddddddddddd");

    try {
      const response: AxiosResponse = yield call(
        userApi.post,
        "/delete-employee",
        {
          id: payload,
        }
      );
      console.log(response);
      if (response.status == 200) {
        console.log("getting started");
        // const data: UserAdded = {
        //   type: ActionTypes.USER_ADDED,
        //   payload: response.data,
        // };
        // console.log("reaches here");
        // yield put(data);
      }
    } catch (e) {
      console.log(e);
    }
    // const data: deleteUser = {
    //   type: ActionTypes.DELETE_USER,
    //   payload: payload,
    // };
    //   yield put(data);
  } catch (error) {
    console.log(error);
  }
}
export default mySaga;
