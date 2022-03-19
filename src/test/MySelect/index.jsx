import Select from '../../components/Select'

const MySelect = () => {

    return <div style={{width: 'fit-content'}}>
        <Select 
        options={[{label: 'dfds', value: 11}, {label: 'fbdf', value: 22}]}
        placeholder={'请选择'}
        prefix={<span>pre</span>}
        multiple
        />
    </div>
}

export default MySelect