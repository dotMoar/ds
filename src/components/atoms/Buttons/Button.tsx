import React from "react";
import { Button as ButtonAnt } from 'antd';
export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <ButtonAnt> {props.label} </ButtonAnt>
}

export default Button;