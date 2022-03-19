import { useState } from "react";
import './index.css'

const Radio = (props) => {
    const [checked, setChecked] = useState(false)

    const changeRadio = (e) => {
        setChecked(e.target.checked);
    }

    return <div className="x-radio-container">
        <input 
        type="radio" 
        name="" 
        id="radio" 
        value={checked} 
        onChange={changeRadio} 
        />
        <label for="radio">
            {
                props.children
            }
        </label>
    </div>
}

export default Radio