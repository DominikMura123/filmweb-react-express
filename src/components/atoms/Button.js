
function Button(props) {
    return (
      <button
        className = {props.class}
        type = {props.type ? props.type : 'button'}
        onClick = {props.handleClick}
      >
        {props.children}
      </button>
    )
  }
  
  export default Button;