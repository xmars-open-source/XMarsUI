import React, { ReactChildren, FunctionComponent } from 'react';
import classnames from 'classnames';

interface Props {
    primary: boolean,
    additionalClass: string,
    children: ReactChildren
}

const Button: FunctionComponent<Props> = ({primary, additionalClass, children}) => {
    const classNames = classnames(
        'btn',
        primary,
        additionalClass
    );

    return (
        <button className={classNames}>
            {children}
        </button>
    );
}

export default Button;