import './index.css'

const Table = (props) => {

    return <div className="x-table-container">
        <table className='x-table'>
            <thead className='x-table-thead'>
                <tr>
                    {
                        (props.headTitles || []).map(item => {
                            return <th className='x-table-th'>
                                {
                                    item.title
                                }
                            </th>
                        })
                    }
                </tr>
            </thead>
            <tbody className='x-table-tbody'>
                {
                    (props.data || []).map(a => {
                        return <tr>
                            {
                                 (props.headTitles || []).map(b => {
                                     let key = b.key
                                     if (b.render) {
                                        return <td className='x-table-td'>
                                            {
                                                b.render(a[key], a)
                                            }
                                        </td>
                                     }
                                     return <td className='x-table-td'>
                                         {
                                             a[key]
                                         }
                                     </td>
                                 })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default Table