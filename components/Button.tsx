import { omit } from 'underscore';
import React, { FunctionComponent, ButtonHTMLAttributes, useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import classnames from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean,
    ripple?: boolean,
    circle?: boolean,
    additionalClass?: string,
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const [rippleElements, setRippleElements] = useState<JSX.Element[]>([]);
    const {primary, circle, ripple, additionalClass, children} = props;

    const classNames = classnames(
        'btn',
        {
            primary
        },
        {
            'with-ripple': ripple
        },
        {
            circle
        },
        additionalClass
    );

    function onAnimationEnd(key: string) {
        setRippleElements(rippleElements => rippleElements.filter(element => element.key !== key));
    }

    function onRippleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        var rect = event.currentTarget.getBoundingClientRect();

        const d = Math.max(event.currentTarget.clientWidth, event.currentTarget.clientHeight);
        const left = event.clientX - rect.left -d/2 + 'px';
        const top = event.clientY - rect.top - d/2 + 'px';
        const rippleElement = newRippleElement(d, left, top);

        setRippleElements([...rippleElements, rippleElement]);
    }

    function newRippleElement(d: number, left: string, top: string) {
        const key = uuid();

        return (
            <div
                key={key}
                className="ripple"
                style={{width: d, height: d, left, top}}
                onAnimationEnd={() => onAnimationEnd(key)}
            >
            </div>
        );
    }

    function renderRippleElements() {
        return rippleElements;
    }

    return (
        <button
            className={classNames}
            {...omit(props, ['additionalClass', 'primary'])}
            onClick={(event) => {
                if (props.onClick) {
                    props.onClick(event);
                }

                if (ripple) {
                   onRippleClick(event);
                }
            }}
        >
            {children}
            {renderRippleElements()}
        </button>
    );
}

export default Button;