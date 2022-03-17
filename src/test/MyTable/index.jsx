import Table from '../../components/Table'

const MyTable = () => {

    const clickBtn = (row) => {
        console.log(row);
    }

    // 表头
    const headTitles = [
        {
            title: '组件名称',
            key: 'name',
            render: (text, row) => {
                return <span>
                    {
                        text + 111
                    }
                </span>
            }
        },
        {
            title: '组件英文名称',
            key: 'EnglishName'
        },
        {
            title: '操作',
            key: 'operation',
            render: (text, row) => {
                return <button onClick={() => {clickBtn(row)}}>点击</button>
            }
        },
    ]

    // 表格数据
    const data = [
        {
            name: '表格组件',
            EnglishName: 'Table',
        }
    ]

    return <Table
        headTitles={headTitles}
        data={data}
        />
}

export default MyTable