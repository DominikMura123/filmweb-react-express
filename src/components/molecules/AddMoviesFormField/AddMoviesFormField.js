import Input from "../../atoms/Input.js"
import Label from "../../atoms/Label.js"

function AddMoviesFormField(props){
    return(
        <div className = {props.class}>
            <Label>
                {props.labelText}
            <Input
                value = {props.inputValue}
                handleOnChange = {props.handleOnChange}
            />
            </Label>
        </div>
    )
}
export default AddMoviesFormField