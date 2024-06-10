import {  ReactNode } from 'react'

interface PropsType {
    htmlFor: string
    children: ReactNode

}

export default function SearchLabel({ htmlFor, children }: PropsType) {
    return (
        <label htmlFor={htmlFor} className={''}>
            {children}
        </label>
    )
}