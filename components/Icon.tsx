import { omit } from 'underscore';
import React, { FunctionComponent, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
    name: string,
    additionalClass?: string
}

const Icon: FunctionComponent<Props> = (props) => {
    const {name, additionalClass} = props;

    return (
       <i className={`icon-${name} ${additionalClass}`} {...props}></i>
    );
}

export default Icon;