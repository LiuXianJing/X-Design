
import Button from '../../components/Button'

const MyButton = () => {

    return <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Button onClick={() => {console.log('click btn!')}}>
            按钮
        </Button>
        <Button type='primary'>
            primary按钮
        </Button>
        <Button type='link'>
            link按钮
        </Button>
    </div>
}

export default MyButton