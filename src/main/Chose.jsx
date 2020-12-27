import React from 'react'
import { Row, Button } from 'antd';
import { AppstoreAddOutlined, LoginOutlined } from '@ant-design/icons';

import '../css/ChoseStyle.css'

class Chose extends React.Component {

    render() {
        return (
            <div className={'chose-div'}>
                <Row gutter={[16, 16]}>
                    <div className={'title-div'}>
                        临时会话室
                    </div>
                </Row>
                <Row gutter={[16, 16]} className={'row-button'}>
                    {/*<Col span={12} className={'col-content'}>*/}
                    <Button shape="round" icon={<AppstoreAddOutlined />} size={'large'} className={'button'}>
                        创建聊天室
                    </Button>
                </Row>
                <Row gutter={[16, 16]} className={'row-button'}>
                    {/*</Col>*/}
                    {/*<Col span={12} className={'col-content'}>*/}
                    <Button shape="round" icon={<LoginOutlined />}  size={'large'} className={'button'}>
                        进入聊天室
                    </Button>
                    {/*</Col>*/}
                </Row>
            </div>
        )
    }
}
export default Chose;