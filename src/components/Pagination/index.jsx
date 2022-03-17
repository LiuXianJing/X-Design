import { useState, useEffect, useMemo } from "react"
import LeftOutlined from '../Icons/LeftOutlined'
import RightOutlined from '../Icons/RightOutlined'
import './index.css'

const Pagination = (props) => {
    const [current, setCurrent] = useState(1)

    const numList = useMemo(() => {
        let num = props.total / props.pageSize
        let arr = []
        while(num) {
            arr.push(num)
            num--
        }
        arr = arr.reverse()
        return arr
    }, [props.total, props.pageSize])

    const clickStep = (type) => {
        if (type === 'add' && current < numList.length) {
            let temp = current + 1
            setCurrent(temp)
        }
        if (type === 'subtract' && current > 1) {
            let temp = current - 1
            setCurrent(temp)
        }
    }

    const clickPage = (page) => {
        setCurrent(page)
    }

    return <div className="x-pagination-container">
        <div 
        className={`x-pagination-left-arrow ${current === 1 ? 'not-allow' : ''}`}
        onClick={() => {clickStep('subtract')}}
        >
            <RightOutlined />
        </div>
        <ul className="x-pagination-ul">
            {
                numList.map(item => {
                    return <li 
                    className={`x-pagination-ul-li ${current === item ? 'current-li' : ''}`}
                    onClick={() => {clickPage(item)}}
                    >
                        {
                            item
                        }
                    </li>
                })
            }
        </ul>
        <div 
        className={`x-pagination-right-arrow ${current === numList.length ? 'not-allow' : ''}`}
        onClick={() => {clickStep('add')}}
        >
            <LeftOutlined />
        </div>
    </div>
}

export default Pagination