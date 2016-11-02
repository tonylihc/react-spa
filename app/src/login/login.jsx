import React from 'react'
import { browserHistory } from 'react-router'
import { Form, Input, Button, notification } from 'antd'

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
        console.log(`the value n is ${n}`);
        console.log(p)
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
            description: '都是 TonyLi',
            duration: 6,
        })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info')
    }

    render() {
        const {getFieldProps} = this.props.form; //
        console.log('the username is' + {...getFieldProps('username')});
        return (
            <div id="loginpagewrap">
                <p>Sign in to SPA!</p>
                <div id="loginwrap">
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            <Input placeholder="username" {...getFieldProps('username')} />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="Password" type="password" {...getFieldProps('password')} />
                        </FormItem>
                        <Button type="primary" htmlType="submit" id="loginBtn">Login</Button>
                    </Form>
            </div>
            </div>

        );
    }
}

let Login= Form.create()(LoginPage);
export default Login;

