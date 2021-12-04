import React, { useState } from "react";
import { Button } from "../styles/Button_styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store/store";
import { deleteuserActionCreator } from "./redux/action/index";
import { Table } from "../styles/tablestyle";

const Home: React.FC = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const onDelete = (_id: string) => {
    dispatch(deleteuserActionCreator(_id));
  };
  return (
    <div
      style={{
        width: "100%",
        // minWidth: "400px",
        minHeight: "80vh",
        textAlign: "center",
        display: "flex",
        flexFlow: "column",
        alignItems: "start",
        background: "rgba(255,255,255,0.2)",
        marginTop: "10px",
        borderRadius: "10px",
        overflowX: "scroll",
      }}
    >
      <Table>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Date OF Birth</th>
          <th>Salary</th>
          <th></th>
          <th></th>
        </tr>
        {users.map((user, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{user.Name}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.salary}</td>
              <td>
                <button className="button button2">Edit</button>
              </td>
              <td>
                <button className="button button3">Delete</button>
              </td>
            </tr>
          );
        })}
      </Table>
      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.Name}
            <Button
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ) => {
                onDelete(user._id);
              }}
            >
              delete
            </Button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default Home;
