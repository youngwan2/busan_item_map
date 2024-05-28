import { MouseEventHandler, ReactNode } from "react"

interface PropsType {
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
    title?: string
    ariaLabel?: string
    stylesClassName?: string
    disabled?:boolean
}

export default function Button({ onClick, children, disabled, title, ariaLabel, stylesClassName }: PropsType) {
    return (
        <button disabled={disabled} className={stylesClassName} onClick={onClick} title={title} aria-label={ariaLabel}>
            {children}
        </button>
    )
}