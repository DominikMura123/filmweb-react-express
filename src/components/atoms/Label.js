function Label(props){
    return(
        <label
            className = {props.class}
        >
            {props.children}
        </label>
    )
}

export default Label