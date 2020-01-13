import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import Button from './Button';
import Icon from './Icon';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    primary?: boolean,
    additionalClass?: string
}

const IconButton: FunctionComponent<Props> = (props) => {
    return (
       <Button {...props}>
           <Icon {...props}></Icon>
       </Button>
    );
}

export default IconButton;