import React from 'react';
import { Layout, PageHeader, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
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
                        </Content>
                        <Footer className={'container'} style={{height: '23vh', backgroundColor: '#b5f5ec'}}>
                        {/*    信息输入列表*/}

                        </Footer>
                    </Layout>
                    <Sider className={'container'} />
                </Layout>
            </div>
        )
    }
}

export default Room;