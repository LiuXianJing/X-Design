import './index.css'

const Row = (props) => {

    return <div className="x-row-container">
        {
            props.children
        }
    </div>
}

export default Row