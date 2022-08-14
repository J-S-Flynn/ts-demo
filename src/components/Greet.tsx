
type GreetProps = {
    name: string,
    messageCount?: number, //? denotes optional same as java 
    isLoggedIn: boolean
}
export const Greet = (props: GreetProps) =>{
    const {messageCount = 0} = props; // assigning default value for message count 
    
    return (
        <>
            <div>
                <h2>{
                    props.isLoggedIn
                        ? `Hello ${props.name}! you have ${messageCount} new messages` 
                        : `Welcome Guest`
                }</h2>
            </div>
        </>
    )
}