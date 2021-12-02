import React from "react";
import { TextFieldStyle,InputBox } from "../styles/Textfield_style";
interface props{
    name: string,
    placeHolder: string,
    visible?: boolean,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextField: React.FC<props> = ({ name, placeHolder,handleChange }) => {
   
    return (
        <InputBox>
            <TextFieldStyle type="text" name={name} placeholder={placeHolder} onChange={ handleChange}/>
        </InputBox>)
}
