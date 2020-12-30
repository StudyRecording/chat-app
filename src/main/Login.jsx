import React from 'react';
import { Card } from 'antd';
import '../css/LoginStyle.css';
import CreateRoom from './component/CreateRoom';
import IntoRoom from './component/IntoRoom';

/**
 * 聊天室认证
 */
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCreate : true,
        }
    }

    componentDidMount() {
        const {loginState} = this.props;
        if (loginState === 'c') {
            // 创建聊天室
            this.setState({isCreate: true})
        } else {
            // 进入聊天室
            this.setState({isCreate: false})
        }
    }

    

    render() {

        const {isCreate} = this.state;
        let element = null;
        if (isCreate) {
            element = <CreateRoom />;
        } else {
            element = <IntoRoom />;
        }

        return (
            <div className={'my-login'}>
                <Card className={'login-card'} hoverable={true} bodyStyle={{margin: '5px', height: '100%'}} >
                    {element}
                </Card>
            </div>
        )
    }
}

export default Login;