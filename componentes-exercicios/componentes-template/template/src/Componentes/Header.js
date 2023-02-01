import React from "react";
import Logo from "../img/logo.png"

export function Header() {
  

    return (
      <div className="header-1">
       <h1>Este é o Header</h1>
        <div>
            <img className="Logo" src={Logo} alt="logo"/>
        </div> 
      </div>
    );
  }