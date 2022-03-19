import { useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import './index.css'

const Tag = (props) => {
    const [visible, setVisible] = useState(true)

    const close = () => {
        setVisible(false)
        props.onClose && props.onClose()
    }

    return <>
        {
            visible ? 
            <span className="x-tag-container" style={props.style || null}>
                <span className="x-tag-content">
                    {
                        props.children
                    }
                </span>
                {
                    props.isClose ? 
                    <span className="x-tag-icon" onClick={close}>
                        <CloseIcon />
                    </span>
                    : null
                }
            </span>
            : null
        }
    </>
}

export default Tag