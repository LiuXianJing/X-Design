import { useMemo } from "react"

const Col = (props) => {

    const percentage = useMemo(() => {
        let span = props.span || 0
        return span / 24
    }, [props.span])

    const style = useMemo(() => {
        let obj = {...props.style, flex: percentage}
        return obj
    }, [props.style])

    return <div className="x-col" style={style || null}>
        {
            props.children
        }
    </div>
}

export default Col