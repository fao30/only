import React from "react";
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router";

export default function MainPage() {
  let Navigate = useNavigate();
  const AfterLogout = () => {
    localStorage.clear()
    Navigate("/login")
  }

  return (
    <>
    <div className="Page-center">
        <center>
          <div className="Flexing">
            <p>Здравствуйте,</p>
            <p style={{ fontWeight:'bold'}}>{localStorage.email}</p>
          </div>
          <Button
          variant="light"
          className="Logout-button"
          onClick={AfterLogout}
          >Выйти</Button>{' '}
        </center>
      </div>
    </>
  );
}
