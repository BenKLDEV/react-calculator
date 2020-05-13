import React from 'react';
import './Button.css';


const isOperator = val => {
  return !isNaN(val) || val === "." || val === "="; /* If its not a number or an operator either . or = the function reutrns true */ 
}

export const Button = props => (
  <div className={`button-wrapper ${
    isOperator(props.children) ? null : "operator" 
  }`}
  
    onClick={() => props.handleClick(props.children)}
    >
    
    {props.children}
  </div>
)

