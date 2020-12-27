import React from 'react';
import { Card } from 'antd';
import '../css/LoginStyle.css';

/**
 * 聊天室认证
 */
class Login extends React.Component {


    render() {
        return (
            <div className={'my-login'}>
                <Card className={'login-card'} hoverable={true} >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        )
    }
}

export default Login;