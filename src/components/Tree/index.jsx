import { useState, useMemo, Fragment } from 'react'
import DownTriangle from '../Icons/DownTriangleIcon'
import RightTriangle from '../Icons/RightTriangleIcon'
import './index.css'

const Tree = (props) => {
    const [treeData, setTreeData] = useState(props.treeData || [])

    const handleInitTreeData = (data, field, type, node) => {
        let arr = []
        function loop(data) {
            return data.map(item => {
                if(type === 'init') {
                    item[field] = false
                } else if(type === 'update' && node.val === item.val) {
                    item[field] = !item[field]
                }
                if(item.children && Array.isArray(item.children)) {
                    item.children = loop(item.children)
                }
                return item
            })
        }
        arr = loop([...data])
        return arr
    }

    const tempData = useMemo(() => {
        return handleInitTreeData([...props.treeData], 'isSelected', 'init')
    }, [props.treeData])

    

    const clickTreeNode = (node) => {
        let arr = []
        arr = handleInitTreeData([...treeData], 'isSelected', 'update', node)
        setTreeData(arr)
        props.onChange && props.onChange(node.val, node.label, node.isSelected)
    }

    const renderTree = (treeDataArr) => {
        let arr = []
        function loop(data, level) {
            return data.map(item => {
                let newLevel = level + 1
                return <Fragment key={JSON.stringify(item)}>
                    <span 
                    className="tree-node-label"
                    onClick={() => {clickTreeNode(item)}}
                    >
                        {
                            (item.children && item.children.length > 0) ?
                            (item.isSelected ? <DownTriangle /> : <RightTriangle />)
                            :
                            <span className='tree-node-label-left-empty'></span>
                        }
                        {
                            props.showCheckbox ?
                            <input
                            type="checkbox"
                            checked={item.isSelected}
                            />
                            : null
                        }
                        <span>
                            {
                                item.label
                            }
                        </span>
                    </span>
                    {
                        item.isSelected ?
                        <div 
                        className="tree-node-item"
                        style={{paddingLeft: 15 * newLevel}}
                        >
                            {
                                item.children ? 
                                loop(item.children, newLevel)
                                : null
                            }
                        </div>
                        : null
                    }
                </Fragment>
            })
        }
        arr = loop([...treeDataArr], 0)
        return arr
    }

    return <div 
        className="tree-container"
        >
        {
            renderTree(tempData)
        }
    </div>
}

export default Tree