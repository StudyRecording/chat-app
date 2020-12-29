import React from 'react'
import { Row, Button } from 'antd';
import { AppstoreAddOutlined, LoginOutlined } from '@ant-design/icons';

import '../css/ChoseStyle.css'

class Chose extends React.Component {


    /**
     * 按钮点击事件
     * @param {String} ls Login组件功能：c:创建聊天室, i:进入聊天室
     */
    btnClick = ls => {
        this.props.changeCom(1, ls);
    }

    render() {
        return (
            <div className={'chose-div'}>
                <Row gutter={[16, 16]}>
                    <div className={'title-div'}>
                        临时会话室
                    </div>
                </Row>
                <Row gutter={[16, 16]} className={'row-button'}>
                    <Button shape="round" icon={<AppstoreAddOutlined />} size={'large'} className={'button'} onClick={() => this.btnClick('c')}>
                        创建聊天室
                    </Button>
                </Row>
                <Row gutter={[16, 16]} className={'row-button'}>

                    <Button shape="round" icon={<LoginOutlined />}  size={'large'} className={'button'} onClick={() => this.btnClick('i')}>
                        进入聊天室
                    </Button>
                </Row>
            </div>
        )
    }
}
export default Chose;