import { useState } from "react"
import Button from "../../components/Button"
import Modal from "../../components/Modal"

const MyModal = () => {
    const [visible, setVisible] = useState(false)

    return <>
        <Button type='primary' onClick={() => {setVisible(true)}}>
            打开弹窗Modal
        </Button>
        {
            visible ? 
            <Modal 
            visible={visible}
            title='标题'
            ooter={<Button type='primary'>确定</Button>}
            onClose={() => {setVisible(false)}}
            >
                con
            </Modal>
            : null
        }
    </>
}

export default MyModal