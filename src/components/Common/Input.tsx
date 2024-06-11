import { type KeyboardEventHandler, forwardRef, Ref, CSSProperties } from 'react';

interface PropsType {
    type: string;
    id: string
    ariaLabel: string
    placeholder: string;
    style?: CSSProperties;
    onKeyUp: KeyboardEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, PropsType>(
    ({ type, id, ariaLabel, placeholder, style, onKeyUp }, ref: Ref<HTMLInputElement>) => {
        return (
            <input
                aria-label={ariaLabel}
                id={id}
                ref={ref}
                className={`${style||''}`}
                type={type}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
            />
        );
    }
);

export default Input;


