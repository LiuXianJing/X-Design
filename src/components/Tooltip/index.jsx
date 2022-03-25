import { useState } from 'react'
import './index.css'

const Tooltip = (props) => {
    const [visible, setVisible] = useState(props.defaultVisible || false)

    const onMouseEnter = () => {
        setVisible(true)
    }

    const onMouseLeave = () => {
        setVisible(false)
    }

    return <div className="x-tooltip-container">
        {
            visible ?
            <span>
                <span 
                className="x-tooltip-text" 
                >
                    {
                        props.text || ''
                    }
                </span>
                <span className="x-tooltip-arrow">
                </span>
            </span>
            : null
        }
        <span
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            {
                props.children
            }
        </span>
    </div>
}

export default Tooltip