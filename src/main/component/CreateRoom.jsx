import React from 'react';
import { Row, Divider } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';

class CreateRoom extends React.Component {


    render() {
        return (
            <>
            <Row style={{textAlign: 'center', fontSize: '4vh'}}>
                <div style={{width: '100%', textAlign: 'center'}}>创建聊天室</div>
            </Row>
            <Divider>{<AppstoreAddOutlined style={{color: '#69c0ff', fontSize: '3vh'}}/>}</Divider>
            <Row>
                表单
            </Row>
            </>
        )
    }
}

export default CreateRoom;