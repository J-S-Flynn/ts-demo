
type PersonListProps = {
    name:{
        first: string,
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    
    return (
        <>
            <div>
                {props.name.map(name => {
                    return (
                        <h2 key={name.first}>{name.first} {name.last}</h2>
                    )
                })}
            </div>
        </>
    )
}