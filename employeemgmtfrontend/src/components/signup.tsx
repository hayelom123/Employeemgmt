import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button_styles";
import { CreateAccount, SignUpLink } from "../styles/createAcountText_style";
import { Form } from "../styles/form_style";
import { H1Style } from "../styles/h1styles";
import { TextField } from "../Utils/TextField";

export const SignUp: React.FC = () => {
    const [userName, setUserName] = useState<{userName:string,password:string}>({userName:"",password:""});
    return (
        <div>
            <H1Style>SignUp Page</H1Style>
            <Form>
          <TextField name="name" type="text" placeHolder="user name" handleChange={
        e => {
          setUserName({...userName, userName: e.target.value });
          }} />
         <TextField name="password" type="password" placeHolder="password" handleChange={
        e => {
          setUserName({...userName ,password: e.target.value });
            }} />
          <Button>SignUp</Button>
          <CreateAccount>
            <span>Already have account</span><Link to="/"><SignUpLink>SignIn</SignUpLink></Link>
          </CreateAccount>

    </Form>
           </div>
    )
}