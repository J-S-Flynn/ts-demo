
type EventButtonProps = {
    handleEventClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const EventButton = (props: EventButtonProps) => {
    
    return (
        <>
            <button onClick={props.handleEventClick}>Click Me Too!</button>
        </>
    )
}