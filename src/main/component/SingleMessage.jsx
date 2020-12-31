import React from 'react';
import { Typography } from 'antd';
import '../../css/component/SingleMessage.css';

/**
 * 单条消息
 * @param {Object} props 
 */
function SingleMessage(props) {

    if (props.info.self) {
        return (
            <div className={'message-right'}>
                {props.info.description} :<Typography.Text type={'success'} underline={true}>{ props.info.name}</Typography.Text>
            </div>
        )
    } else {
        return (
            <div className={'message-left'}>
                <Typography.Text type={'success'} underline={true}>{ props.info.name}</Typography.Text>: {props.info.description}
            </div>
        )
    }
}

export default SingleMessage;