import { useMemo } from 'react'
import './index.css'

const Button = (props) => {

    const style = useMemo(() => {
        switch(props.type) {
            case 'primary':
                return {
                    backgroundColor: 'rgb(49 136 250)',
                }
            case 'link':
                return {
                    color: 'rgb(49 136 250)',
                    backgroundColor: '#fff',
                }
        }
        return {
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