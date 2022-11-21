
function Input(props) {
    return(
        <input
            className = {props.class}
            value={props.value}
            onChange={props.handleOnChange}
        >
            {props.children}
        </input>
    )
}

export default Input;