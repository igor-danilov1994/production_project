import {
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        type = 'text',
        className,
        value,
        onChange,
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [isAutoFocus, setIsAutoFocus] = useState(false);

    useEffect(() => {
        if (autoFocus) {
            setIsAutoFocus(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (value: string) => {
        onChange?.(value);
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            <input
                ref={inputRef}
                autoFocus={isAutoFocus}
                type={type}
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
                {...otherProps}
            />
        </div>
    );
});
