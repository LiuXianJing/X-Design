import { useState } from "react"
import Button from "../../components/Button"
import Drawer from "../../components/Drawer"

const MyDrawer = () => {
    const [visible, setVisible] = useState(false)

    return <>
        <Button type='primary' onClick={() => {setVisible(true)}}>
            打开Drawer
        </Button>
        {
            visible ? 
            <Drawer 
            visible={visible}
            title='标题'
            onClose={() => {setVisible(false)}}
            >
                <span>
                    内容
                </span>
            </Drawer>
            : null
        }
    </>
}

export default MyDrawer