import { type MouseEventHandler } from 'react';

interface PropsType {
    type: "submit" | "reset" | "button"
    onClick: MouseEventHandler<HTMLButtonElement> 
    text: string
}

export default function Button({ onClick, text, type }: PropsType) {
    return (
        <button
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    )
}