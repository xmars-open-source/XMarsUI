import { omit } from 'underscore';
import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean,
    additionalClass?: string,
}

const Button: FunctionComponent<Props> = (props) => {
    const {primary, additionalClass, children} = props;
    const classNames = classnames(
        'btn',
        {
            primary
        },
        additionalClass
    );

    return (
        <button className={classNames} {...omit(props, ['additionalClass', 'primary'])}>
            {children}
        </button>
    );
}

export default Button;