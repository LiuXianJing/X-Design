import { useMemo } from 'react'
import './index.css'

const Button = (props) => {

    const style = useMemo(() => {
        let obj = props.style || {}
        switch(props.type) {
            case 'primary':
                return {
                    ...obj,
                    backgroundColor: 'rgb(49 136 250)',
                }
            case 'link':
                return {
                    ...obj,
                    color: 'rgb(49 136 250)',
                    backgroundColor: '#fff',
                }
        }
        return {
            ...obj,
            backgroundColor: '#fff',
            border: '1px solid #cecbcb'
        }
    }, [props.type])

    const click = () => {
        props.onClick && props.onClick()
    }

    return <button className="x-btn" style={style} onClick={click}>
            {
                props.children
            }
        </button>
}

export default Button