import Switch from '../../components/Switch'

const MySwitch = () => {

    const change = (val) => {
        console.log(val);
    }

    return <div style={{width: 'fit-content'}}>
        <Switch defaultOpened onChange={change} />
    </div>
}

export default MySwitch