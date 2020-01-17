import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import Button, { ButtonProps } from './Button';
import Icon from './Icon';

export interface Props extends ButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
}

const IconButton: FunctionComponent<Props> = (props) => {
    return (
       <Button {...props}>
           <Icon {...props}></Icon>
       </Button>
    );
}

export default IconButton;