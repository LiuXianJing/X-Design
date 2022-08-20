import { useRef } from 'react'
import ArrowUpIcon from '../Icons/ArrowUpIcon'
import './index.css'

const Upload = (props) => {
    const inputRef = useRef({})

    const handleClickBtn = () => {
        inputRef.current.click()
    }

    const change = (e) => {
        let files = e.target.files
        console.log(files);
        if(props.accept && !files[0].type.includes(props.accept)) {
            throw new Error('the type of file is wrong.')
        }
        if(props.multiple) {
            files = e.target.files
        } else {
            files = e.target.files[0]
        }
        props.onChange && props.onChange(files)
    }

    return <div 
        className="x-upload-container"
        >
            <ArrowUpIcon />
            <input 
            type="file" 
            multiple={props.multiple}
            ref={inputRef}
            onChange={change}
            className="x-upload-input" 
            />
            <button 
            onClick={handleClickBtn}
            className="x-upload-btn"
            >
                上传
            </button>
    </div>
}

export default Upload