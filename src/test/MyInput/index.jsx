import Input from '../../components/Input'

const MyInput = () => {

    return <div style={{width: 'fit-content'}}>
        <Input 
        placeholder={'请输入'}
        prefix={<span>pre</span>}
        />
    </div>
}

export default MyInput