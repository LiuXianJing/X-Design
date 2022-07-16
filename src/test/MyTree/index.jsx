import Tree from '../../components/Tree'

const data = [
    {
        label: '节点1',
        val: 'node-1',
    },
    {
        label: '节点2',
        val: 'node-2',
        children: [
            {
                label: '节点2-1',
                val: 'node-2-1',
            },
            {
                label: '节点2-2',
                val: 'node-2-2',
            },
        ]
    },
    {
        label: '节点3',
        val: 'node-3',
        children: [
            {
                label: '节点3-1',
                val: 'node-3-1',
                children: [
                    {
                        label: '节点3-1-1',
                        val: 'node-3-1-1',
                    },
                    {
                        label: '节点3-1-2',
                        val: 'node-3-1-2',
                    },
                ]
            },
        ]
    },
]

const MyTree = () => {

    const handleChange = (val, label, isSelected) => {
        console.log(val, label, isSelected);
    }

    return <div>
        <Tree treeData={data} showCheckbox onChange={handleChange} />
    </div>
}

export default MyTree