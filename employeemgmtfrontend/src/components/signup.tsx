import React, { useState } from "react";
import { Button } from "../styles/Button_styles";
import { CreateAccount, SignUpLink } from "../styles/createAcountText_style";
import { Form } from "../styles/form_style";
import { TextField } from "../Utils/TextField";

export const SignUp: React.FC = () => {
    const [userName, setUserName] = useState<{userName:string,password:string}>({userName:"",password:""});
    return (
           <Form>
          <TextField name="name" placeHolder="user name" handleChange={
        e => {
          setUserName({...userName, userName: e.target.value });
          }} />
         <TextField name="password" placeHolder="password" handleChange={
        e => {
          setUserName({...userName ,password: e.target.value });
            }} />
          <Button>login</Button>
          <CreateAccount>
            <span>I don't have account</span><SignUpLink>SignUp</SignUpLink>
          </CreateAccount>

    </Form>
    )
}