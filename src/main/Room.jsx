import React from 'react';
import { Layout, PageHeader, Tooltip, Input, Row, Col, Button, List, Typography, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import SingleMessage from './component/SingleMessage';
import '../css/RoomStyle.css'

/**
 * 聊天室
 */
class Room extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { Header, Footer, Sider, Content } = Layout;
        const { TextArea } = Input;

        const data = [
            {
                id: 1,
                name: 'hpc',
                description: '你好!',
                self: true
            },
            {
                id: 2,
                name: 'xxq',
                description: '你好!',
                self: false
            },
            {
                id: 3,
                name: 'hpc',
                description: '今天天气不错!',
                self: true
            },
            {
                id: 4,
                name: 'hpc',
                description: '大雪纷飞，万里乌云!',
                self: true
            },
            {
                id: 5,
                name: 'xxq',
                description: '额呢，我还有事，先走啦!',
                self: false
            },
            {
                id: 6,
                name: 'hpc',
                description: 'good bye!',
                self: true
            },
            {
                id: 7,
                name: 'xxq',
                description: 'good bye!',
                self: false
            }
        ]

        return (
            <div>
                <Layout className={'container'} style={{paddingTop: '3vh'}}>
                    <Sider className={'container'} />
                    <Layout className={'container'}>
                        <Header className={'container'} style={{backgroundColor:'#55b9f3'}}>
                            <PageHeader
                                className={'head-layout'}
                                // onBack={() => null}
                                title="摸鱼大队"
                                subTitle="当前房间人数"
                                extra={
                                    <Tooltip placement="bottom" title="退出聊天室" color={'#adc6ff'}>
                                        <LogoutOutlined style={{color: '#f5222d', fontSize: '3vh'}} />
                                    </Tooltip>
                                }
                            />
                        </Header>
                        <Content className={'container, content-layout'}>
                        {/*    对话列表*/}
                        <List
                            size={'large'}
                            split={false}
                            bordered={false}
                            dataSource={data}
                            style={{fontSize: '2vh'}}
                            renderItem={item => (
                            <List.Item key={item.id} >
                                {/* <Typography.Text type={'success'} underline={true}>{item.name}</Typography.Text>: {item.description} */}
                                <SingleMessage info={item}/>
                            </List.Item>
                            )}
                        />
                        </Content>
                        <Footer className={'container'} style={{height: '23vh', backgroundColor: '#b5f5ec'}}>
                        {/*    信息输入列表*/}
                            <Row style={{height: '15vh'}}>
                                <TextArea rows={4} placeholder="请输入消息..." bordered={false} style={{resize: 'none'}} />
                            </Row>
                            <Row>
                                <Col offset={22}><Button>发送</Button></Col>
                            </Row>
                            
                        </Footer>
                    </Layout>
                    <Sider className={'container'} />
                </Layout>
            </div>
        )
    }
}

export default Room;