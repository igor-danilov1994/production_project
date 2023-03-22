import {
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean,
    className?: string,
    label?: string
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        type = 'text',
        value,
        onChange,
        autoFocus,
        readonly,
        className,
        placeholder,
        label,
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

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            {label && <label className={cls.label}>{label}</label>}
            <input
                ref={inputRef}
                autoFocus={isAutoFocus}
                type={type}
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
                {...otherProps}
                readOnly={readonly}
                placeholder={placeholder}
            />
        </div>
    );
});
