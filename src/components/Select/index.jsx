import { useState } from 'react'
import Input from "../Input"
import Tag from '../Tag'
import './index.css'

const Select = (props) => {
    const [isFocus, setIsFocus] = useState(false)
    const [selectVal, setSelectVal] = useState('') // 单选
    const [selectVals, setSelectVals] = useState([]) // 多选

    const focus = () => {
        setIsFocus(true)
        props.onFocus && props.onFocus()
    }

    const blur = () => {
        props.onBlur && props.onBlur()
        setTimeout(() => {
            setIsFocus(false)
        }, 200)
    }

    const clickOption = (value, option) => {
        if (props.multiple) {
            let index = selectVals.findIndex(item => item.value === value)
            if (index === -1) {
                selectVals.push(option)
                setSelectVals([...selectVals])
            }
            return
        }
        setSelectVal(value)
    }

    const closeTag = (option) => {
        let index = selectVals.findIndex(item => item.value === option.value)
        selectVals.splice(index, 1)
        setSelectVals([...selectVals])
    }

    const optionsList = () => {
        if (props.options && props.options.length) {
            return <>
            {
                props.options.map(item => {
                    return <div 
                    className="x-select-option" 
                    key={item.value}
                    onClick={() => {clickOption(item.value, item)}}
                    >
                        {
                            item.label
                        }
                    </div>
                })
            }
            </>
        }
        return <div className="no-data">
            无数据
        </div>
    }

    return <div className="x-select-container">
        <Input 
        placeholder={props.placeholder}
        value={selectVal}
        onFocus={focus}
        onBlur={blur}
        />
        {
            props.multiple ? 
            <span className='x-selected-vals-tag'>
            {
                selectVals.map(item => {
                    return <Tag 
                        isClose 
                        onClose={() => {closeTag(item)}}
                        key={item.value} 
                        style={{marginRight: '2px'}}
                        >
                            {item.label}
                        </Tag>
                })
            }
            </span>
            : null
        }
        {
            isFocus ? 
            <div className="x-select-options-list">
                {
                    optionsList()
                }
            </div>
            : null
        }
    </div>
}

export default Select