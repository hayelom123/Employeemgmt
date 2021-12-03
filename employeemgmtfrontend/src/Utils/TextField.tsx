import { type } from "os";
import React from "react";
import { TextFieldStyle,InputBox } from "../styles/Textfield_style";
interface props{
    name: string,
    placeHolder: string,
    type:string,
    visible?: boolean,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
}
export const TextField: React.FC<props> = ({ name, placeHolder,handleChange,type }) => {
   
    return (
        <InputBox>
            <TextFieldStyle type={type} name={name} placeholder={placeHolder} onChange={ handleChange}/>
        </InputBox>)
}
