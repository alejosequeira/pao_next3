import React from "react";

const Header = (props) => {
  return (
    <header id="header">
       <p>{props.data ? "": "Loading"}</p>
                {props.data && (
                  <img className="intro" src={props.data.image} alt="Image" />
                )}
      
    </header>
  );
};
export default Header;