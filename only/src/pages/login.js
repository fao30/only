import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Checkbox from '@mui/material/Checkbox';



export default function Login() {
  let Navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [loginPass, setLoginPass] = useState({
    Login:'',
    Password:''
  });
  const loginAndPass = {
    login: 'steve.jobs@example.com',
    pass: 'password'
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



  const LoginCheck = () => {
    if(loginPass.Login !== loginAndPass.login){
      setErrorMessage(`Пользователя ${loginPass.Login} не существует`)
    }else{
      if(loginPass.Password !== loginAndPass.pass){
        setErrorMessage(`не верный пароль`)
      }else{
        localStorage.setItem('access_token', 'W3LLDoneYou4r3In')
        localStorage.setItem('email', loginPass.Login)
        Navigate("/");
      }
    }
  }



  return (
    <>
      <div className="Input-center">
        <center>
          {errorMessage?(
            <div className="Box-notif">
              <p className="Text-notif">
              {errorMessage}
              </p>
            </div>
          ):(
            <></>
          )}
          <Form.Label className="Login-text" htmlFor="login">Login</Form.Label>
          <Form.Control
            type="text"
            id="login"
            value={loginPass.Login}
            aria-describedby="passwordHelpBlock"
            className="Password-input"
            onChange={(e)=>{
              const {
                target: { value },
              } = e;
              setLoginPass({
                ...loginPass,
                Login:value})}
            }
          />
          <Form.Label className="Password-text" htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            value={loginPass.Password}
            id="password"
            aria-describedby="passwordHelpBlock"
            className="Password-input"
            onChange={(e)=>{
              const {
                target: { value },
              } = e;
              setLoginPass({
                ...loginPass,
                Password:value})}
            }
          />
          <Button
          variant="primary"
          className="Input-button"
          onClick={LoginCheck}
          >Войти</Button>{' '}
        </center>
      </div>
    </>
  );
}
