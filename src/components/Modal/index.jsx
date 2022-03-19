import Button from '../Button'
import CloseIcon from '../Icons/CloseIcon'
import './index.css'

const Modal = (props) => {

    return <>
        {
            props.visible ? 
            <div className="x-modal-container">
                <div className="x-modal-mask"></div>
                <div className="x-modal">
                    <div className="x-modal-header">
                        <span>
                            {
                                props.title
                            }
                        </span>
                        <span 
                        className='x-modal-header-close'
                        onClick={props.onClose || null}
                        >
                            <CloseIcon />
                        </span>
                    </div>
                    <div className="x-modal-content">
                        {
                            props.children
                        }
                    </div>
                    <div className="x-modal-footer">
                        {
                            props.footer ? 
                            <span>
                                {
                                    props.footer
                                }
                            </span>
                            : 
                            <span className='x-modal-default-footer'>
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

export default Modal