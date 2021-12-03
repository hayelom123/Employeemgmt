import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button_styles";
import { CreateAccount, SignUpLink } from "../styles/createAcountText_style";
import { Form } from "../styles/form_style";
import { H1Style } from "../styles/h1styles";
import { TextField } from "../Utils/TextField";

export const SignIn: React.FC = () => {
    const [userName, setUserName] = useState<{userName:string,password:string}>({userName:"",password:""});
    return (
      <div>
         <H1Style>SignIn Page</H1Style>
          <Form>
          <TextField name="name" type="text" placeHolder="user name" handleChange={
        e => {
          setUserName({...userName, userName: e.target.value });
          }} />
         <TextField name="password" type="password" placeHolder="password" handleChange={
        e => {
          setUserName({...userName ,password: e.target.value });
            }} />
          <Button>login</Button>
          <CreateAccount>
            <span>I don't have account</span><Link to="/signup"><SignUpLink>SignUp</SignUpLink></Link>
          </CreateAccount>

    </Form>
         </div>
    )
}