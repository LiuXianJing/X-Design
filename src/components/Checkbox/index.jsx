
const Checkbox = (props) => {

    return <div className="x-checkbox-container">
        <input 
        type="checkbox" 
        name="" 
        id="check" 
        />
        <label for="check">
            {
                props.children
            }
        </label>
    </div>
}

export default Checkbox