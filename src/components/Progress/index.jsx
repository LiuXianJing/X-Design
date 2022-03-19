import { useMemo } from 'react'
import './index.css'

const Progress = (props) => {

    const percent = useMemo(() => {
        let per = props.percentage || 0
        return per
    }, [props.percentage])

    const renderProgress = (type) => {
        if (type !== 'line' || type !== 'circle') {
            //throw new Error('Please set the type of prop for Progress.')
        }
        if (type === 'line') {
            return <div className="x-progress-line">
                <div className="x-progress-line-outer">
                    <div className="x-progress-line-inner" style={{width: percent + '%'}}></div>
                </div>
                <div className="x-progress-line-percentage">
                    {
                        percent
                    }%
                </div>
            </div>
        } else if (type === 'circle') {
            let style = {
                width: props.width || 60,
                height: props.width || 60
            }
            return <div className="x-progress-circle" style={style}>
                <svg className="x-progress-circle-content" viewBox="0 0 100 100">
                    <path 
                    className="x-progress-circle-trail" 
                    d="M 49,49 m 0,-47 a 46,46 0 1 1 0,94 a 46,46 0 1 1 0,-94" 
                    strokeLinecap="round" 
                    strokeWidth={props.strokeWidth || 4} 
                    fillOpacity="0"
                    >
                    </path>
                    <path 
                    className="x-progress-circle-path" 
                    d="M 49,49 m 0,-47 a 46,46 0 1 1 0,94 a 46,46 0 1 1 0,-94" 
                    stroke="" 
                    style={{strokeDasharray: `${(percent / 100) * 360}px, 360px`, stroke: props.stroke || 'blue'}} 
                    strokeLinecap="round" 
                    strokeWidth={props.strokeWidth || 4} 
                    opacity="1" 
                    fillOpacity="0"
                    >
                    </path>
                </svg>
                <span className="x-progress-circle-percent-text">
                    {
                        percent
                    }%
                </span>
            </div>
        } else {
            return null
        }
    }

    return <div className="x-progress-container">
        {
            renderProgress(props.type)
        }
    </div>
}

export default Progress