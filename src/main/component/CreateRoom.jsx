import React from 'react';
import { Row, Divider, Form, Input, Button } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import '../../css/component/CreateRoom.css';

class CreateRoom extends React.Component {

    /**
     * 表单的值
     * @param values
     */
    onFinish = values => {
        console.log('Success:', values);
    };

    /**
     * 表单提交失败
     * @param errorInfo
     */
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        const layout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 20,
            },
        };
        return (
            <>
            <Row style={{textAlign: 'center', fontSize: '4vh'}}>
                <div style={{width: '100%', textAlign: 'center'}}>创建聊天室</div>
            </Row>
            <Divider>{<AppstoreAddOutlined style={{color: '#69c0ff', fontSize: '3vh'}}/>}</Divider>
            <Row style={{textAlign: 'center'}}>
                <Form
                    {...layout}
                    size={'large'}
                    className={'create-form'}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="房间名"
                        name="roomName"
                        rules={[{ required: true, message: '请输入房间名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="房间编号"
                        name="roomNum"
                        rules={[{ required: true, message: '请输入房间号!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={12}
                    >
                        <Button type="primary" htmlType="submit">
                            创建
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
            </>
        )
    }
}

export default CreateRoom;