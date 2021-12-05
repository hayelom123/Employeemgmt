import { ActionTypes } from "../action_types";
import {
  addUserAction,
  deleteUserAction,
  getListOfEmployeesAction,
} from "../types/actionCreatorTypes";

export const deleteuserActionCreator: deleteUserAction = (_id) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: _id,
  };
};
export const addUserActionCreator: addUserAction = (payload) => {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
};
export const getListOfEmployees: getListOfEmployeesAction = (page) => {
  return {
    type: ActionTypes.Get_Users_Fetch,
    page,
  };
};
