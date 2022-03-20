import Button from '../Button'
import CloseIcon from '../Icons/CloseIcon'
import './index.css'

const Drawer = (props) => {

    return <>
        {
            props.visible ? 
            <div className="x-drawer-container">
                <div className="x-drawer-mask"></div>
                <div className="x-drawer">
                    <div className="x-drawer-header">
                        <span>
                            {
                                props.title
                            }
                        </span>
                        <span 
                        className='x-drawer-header-close'
                        onClick={props.onClose || null}
                        >
                            <CloseIcon />
                        </span>
                    </div>
                    <div className="x-drawer-content">
                        {
                            props.children
                        }
                    </div>
                    <div className="x-drawer-footer">
                        {
                            props.footer ? 
                            <span>
                                {
                                    props.footer
                                }
                            </span>
                            : 
                            <span className='x-drawer-default-footer'>
                                <Button 
                                style={{marginRight: 2}} 
                                onClick={props.onClose || null}
                                >
                                    取消
                                </Button>
                                <Button type='primary'>确定</Button>
                            </span>
                        }
                    </div>
                </div>
            </div>
            : null
        }
    </>
}

export default Drawer