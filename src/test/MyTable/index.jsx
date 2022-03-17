import Table from '../../components/Table'

const MyTable = () => {

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
    ]

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