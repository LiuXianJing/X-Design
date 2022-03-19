import { useState } from 'react'
import './index.css'

const Input = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [val, setVal] = useState('')

    const focus = () => {
        setIsFocus(true)
        props.onFocus && props.onFocus()
    }

    const blur = () => {
        setIsFocus(false)
        props.onBlur && props.onBlur()
    }

    const change = (e) => {
        setVal(e.target.value)
    }

    return <div className={`x-input-container ${isFocus ? 'x-input-container-focus' : ''}`}>
        {
            props.prefix ? 
            <span className="x-input-fix">
                {
                    props.prefix
                }
            </span>
            : null
        }
        <input 
        type="text"
        placeholder={props.placeholder || ''}
        value={val || props.value || ''}
        onFocus={focus} 
        onBlur={blur}
        onChange={change}
        />
        {
            props.suffix ? 
            <span className="x-input-fix">
                {
                    props.suffix
                }
            </span>
            : null
        }
    </div>
}

export default Input