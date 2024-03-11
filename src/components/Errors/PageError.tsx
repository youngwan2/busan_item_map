
interface PropsType {
    error?: string
}
export default function PageError({ error }: PropsType) {


    return (
        <strong>
            {error}
        </strong>
    )
}