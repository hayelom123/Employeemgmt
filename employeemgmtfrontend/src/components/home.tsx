import React, { useState } from "react";
import { Button } from "../styles/Button_styles";
import { TextField } from "../Utils/TextField";
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from "./redux/store/store";
import { addUserActionCreator, deleteuserActionCreator} from "./redux/action/index";

const Home: React.FC = () => {
    const [userName, setUserName] = useState<{ userName: string }>({ userName: "" });
    const { users } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch();
  const  onAddUser=()=>{
      dispatch(addUserActionCreator({Name:userName.userName,dateOfBirth:"",salary:4000,id:userName.userName}));
    }
    const onDelete = (ItemIndex:number) => {
        dispatch(deleteuserActionCreator(ItemIndex));
    }
    return (
        <div>
           <TextField name="name" type="text" placeHolder="user name" handleChange={
        e => {
          setUserName({...userName, userName: e.target.value });
                }} />
            <Button onClick={(e:React. MouseEvent<HTMLButtonElement, MouseEvent>) => {
                // console.log(users);
                onAddUser();
            }}>Add</Button>
            <ul>
                {
                    users.map((user, index) => <li key={index}>{user.Name}
                        <Button onClick={(event:React. MouseEvent<HTMLButtonElement, MouseEvent>) => {
                // console.log(users);
                            const ItemIndex: number = users.indexOf(user);
                            onDelete(ItemIndex);
            }}>delete</Button>
                    </li>)
                }
            </ul>
        </div>
    );
}
export default Home;