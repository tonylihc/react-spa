import React from 'react'
import { browserHistory } from 'react-router'
import { Form, Input, Button, notification, Icon, Checkbox } from 'antd'

import './login.less'
import 'antd/dist/antd.css'


const FormItem = Form.Item;


class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 这里的获取值 值得 思考
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if(n === 'reactIsGood' && p === 'reactIsGood'){
            // 表单的路由处理
            let ss = window.sessionStorage;
            ss.username = n;
            ss.password = p;
            browserHistory.push('/');
        }else{
            this.openNotificationWithIcon('info');
        }
    }

    openNotificationWithIcon = (type) => {
        return notification[type]({
            message: '用户名&密码',
            description: '都是 reactIsGood',
            duration: 6,
        })
    }

    componentDidMount() {
        // this.openNotificationWithIcon('info')
    }

    render() {
        const {getFieldDecorator} = this.props.form; //
        return (
            <div id="loginpagewrap">
                <p>Sign in to SPA!</p>
                <div id="loginwrap">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules:[{required: true, message: "Please input your username!"}],
                            })(
                                <Input addonBefore={<Icon type="user" />} placeholder="username"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules:[{required: true, message: "Please input your Password!"}],
                            })(
                                <Input addonBefore={<Icon type="lock" />} placeholder="Password" type="password"/>
                            )}
                        </FormItem>
                        {/*<Button type="primary" htmlType="submit" id="loginBtn">Login</Button>*/}
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot">Forgot password</a>
                            <Button type="primary" htmlType="submit" id="loginBtn" className="login-form-button">
                                Log in
                            </Button>
                            Or <a>register now!</a>
                        </FormItem>
                    </Form>
            </div>
            </div>

        );
    }
}

let Login= Form.create()(LoginPage);
export default Login;

