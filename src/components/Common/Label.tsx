import { CSSProperties, ReactNode } from 'react'

interface PropsType {
    htmlFor: string
    className: string
    children: ReactNode

}

export default function Label({ htmlFor, className, children }: PropsType) {
    return (
        <label htmlFor={htmlFor} className={`${className}`}>
            {children}
        </label>
    )
}