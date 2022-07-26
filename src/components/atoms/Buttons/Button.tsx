import React from "react";
// import './Button.css'
import { Button as ButtonAnt} from "antd"
export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return (<ButtonAnt type="dashed" shape="circle">
    {props.label}
  </ButtonAnt>)
}

export default Button;