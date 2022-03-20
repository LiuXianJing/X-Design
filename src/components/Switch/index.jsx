import { useMemo, useState } from 'react'
import './index.css'

const Switch = (props) => {
    const [isOpened, setIsOpened] = useState(props.defaultOpened || false)

    const handleSwitch = () => {
        let bool = !isOpened
        setIsOpened(bool)
        props.onChange && props.onChange(bool)
    }

    const innerTextStyle = useMemo(() => {
        if (isOpened) {
            return {
                left: '3px'
            }
        } else {
            return {
                right: '3px'
            }
        }
    }, [isOpened])

    const innerCircleStyle = useMemo(() => {
        if (isOpened) {
            return {
                right: '2px'
            }
        } else {
            return {
                left: '2px'
            }
        }
    }, [isOpened])

    return <div 
        className="x-switch-container" 
        style={{backgroundColor: isOpened ? '#557ce6' : '#b9b7b7'}}
        onClick={handleSwitch}
        >
            <span 
            className="x-swich-inner-text"
            style={innerTextStyle}
            >
                {
                    isOpened ? 
                    props.openedText || '开启'
                    :
                    props.closeText || '关闭'
                }
            </span>
            <div 
            className="x-swich-inner-circle"
            style={innerCircleStyle}
            >
            </div>
        </div>
}

export default Switch