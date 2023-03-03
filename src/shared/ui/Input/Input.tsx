import {
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props) => {
    const {
        type = 'text',
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
        <div>
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
