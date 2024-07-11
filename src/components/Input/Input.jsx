function Input (props) {
    // {
    //     name : '',
    //     type : '',
    //     placeholder : ''
    // }
    return (
        <>
            <label>{props.placeholder}</label>
            <br />
            <input
                {...props}
            />
        </>
    )
}

export default Input