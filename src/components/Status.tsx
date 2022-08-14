
type StatusProp = {
    status: 'loading' |
            'success' |
            'error'
}

export const Status = (props: StatusProp) => {
    let message = '';
    
    if(props.status === "loading"){
        
        message = 'Loading...';
    }else if(props.status === 'success'){
        
        message = 'Data Fetched Successfu lly!'; 
    }else if (props.status === 'error'){
        
        message = 'Error Fetching Data!';
    }
     
    return (
        <>
            <div>
                <h2>Loading...</h2>
                <h2>Status - {message}</h2>
            </div>
        </>
    )
}